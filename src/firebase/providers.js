import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

import { journalAuth } from './';

const googleProvider = new GoogleAuthProvider

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(journalAuth, googleProvider)
        // const credential = GoogleAuthProvider.credentialFromResult(result) 
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            //user info in object:
            displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}




export const registerWithEmail = async ({ displayName, email, contraseña }) => {
    try {
        const res = await createUserWithEmailAndPassword(journalAuth, email, contraseña)
        const { uid, photoURL } = res.user
        //update de los datos del user
        await updateProfile(journalAuth.currentUser, { displayName })
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage,
        }
    }
}


export const loginWithEmail = async ({ email, contraseña }) => {
    try {
        const res = await signInWithEmailAndPassword(journalAuth, email, contraseña)
        const {uid, displayName, photoURL} = res.user
        return {
            ok: true,
            uid, displayName, photoURL
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}

