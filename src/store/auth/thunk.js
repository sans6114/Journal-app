import { signInWithGoogle } from '../../firebase/providers';
import {
  chekingCredentials,
  login,
  logout,
} from './authSlice';

export const checkingAuth = (email, contraseña) => {

    return (dispatch, getState) => {
        dispatch(chekingCredentials())
    }
}

export const checkingAuthGoogle = () => {

    return async (dispatch, getState) => {
        dispatch(chekingCredentials())

        const result = await signInWithGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))
console.log(result.photoURL)
        dispatch(login(result))
    }
}