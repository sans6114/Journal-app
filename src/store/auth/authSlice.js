import { createSlice } from '@reduxjs/toolkit';

const status = {
    checking: 'checking',
    unauthorized: 'unauthorized',
    authorized: 'authorized'
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: status.unauthorized,//cuales son los estados para mi auth ?
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
        chekingCredentials: (state) => {
            // aqui defino lo que me servira para manejar la logica mientras no se cual es el estado de mi auth
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;