import {
  collection,
  doc,
  setDoc,
} from 'firebase/firestore/lite';

import { journalDB } from '../../firebase';
import { addNewEmptyNote } from './journalSlice';

export const createNewNoteThunk = () => {
    return async (dispatch, getState) => {
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
        console.log(newNote)
        dispatch(addNewEmptyNote(newNote))
    }
}