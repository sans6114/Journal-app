import {
  collection,
  getDocs,
} from 'firebase/firestore/lite';

import { journalDB } from '../firebase';

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('el uid del usuario no esta establecido')

    const collectionRef = collection(journalDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    const notes = []
    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    })
    return notes
}