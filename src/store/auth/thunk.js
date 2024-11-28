import {
  loginWithEmail,
  logOutFirebase,
  registerWithEmail,
  signInWithGoogle,
} from '../../firebase/providers';
import { clearNotesLogOut } from '../journal';
import {
  chekingCredentials,
  login,
  logout,
} from './authSlice';

export const checkingAuth = (email, contraseña) => {

    return (dispatch) => {
        dispatch(chekingCredentials())
    }
}

export const registerAuthGoogle = () => {
    //puedo usar de argumentos dispatch y getState
    return async (dispatch) => {
        dispatch(chekingCredentials())

        const result = await signInWithGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}


export const registerUser = ({ displayName, email, contraseña }) => {
    return async (dispatch) => {

        dispatch(chekingCredentials())

        const { ok, uid, errorMessage, photoURL } = await registerWithEmail({ displayName, email, contraseña })
        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, email, displayName, photoURL }))
    }
}

export const loginEmail = ({email, contraseña}) => {
    return async(dispatch) => {
        dispatch(chekingCredentials())

        const result = await loginWithEmail({email, contraseña})
        console.log(result.errorMessage)
        if(!result.ok) return dispatch(logout(result))
        dispatch(login(result))
    }
}

export const startLogOut = () => {
    return async(dispatch) => {
        await logOutFirebase()
        dispatch(clearNotesLogOut())
        dispatch(logout())
    }
}
