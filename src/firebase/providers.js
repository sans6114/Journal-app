import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { journalAuth } from './';

const googleProvider = new GoogleAuthProvider

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(journalAuth, googleProvider)
        console.log(result.user)
        // const credential = GoogleAuthProvider.credentialFromResult(result) 
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            //user info
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