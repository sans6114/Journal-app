import {
  collection,
  doc,
  setDoc,
} from 'firebase/firestore/lite';

import { journalDB } from '../../firebase';
import { loadNotes } from '../../helpers';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from './journalSlice';

export const createNewNoteThunk = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        //obtengo el uid de mi state
        const { uid } = getState().auth
        const newNote = {
            // id: ??
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const newDoc = doc(collection(journalDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const getNoteFromStorageThunk = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        if (!uid) throw new Error('el uid del usuario no esta establecido')
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const updateNoteThunk = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const { uid } = getState().auth
        const { active: note } = getState().journal

        const noteToFirestore = { ...note }
        delete noteToFirestore.id

        const docRef = doc(journalDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFirestore, { merge: true })
        dispatch(updateNote(note.id,{...noteToFirestore}))
    }
}