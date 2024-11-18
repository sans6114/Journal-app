import { createSlice } from '@reduxjs/toolkit';

const status = {
    checking: 'checking',
    unauthorized: 'unauthorized',
    authorized: 'authorized'
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: status.checking,//cuales son los estados para mi auth ?
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = status.authorized
            state.uid = payload.uid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMessage = null
        },
        logout: (state, {payload}) => {
            state.status = status.unauthorized
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = payload.errorMessage 
        },
        chekingCredentials: (state) => {
            // aqui defino lo que me servira para manejar la logica mientras no se cual es el estado de mi auth
            state.status = status.checking
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;