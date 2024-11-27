import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        //     active: {
        //         id: 'ABC123',
        //          title: '',
        //          body: '',
        //          date: 1234566,
        //          imageUrls: [], // https://foto.jpg
        //     }
        // },
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        setSaving: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        updateNote: (state, action) => {
            state.isSaving = false
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id){
                    console.log('si!')
                }
        })
        },
        deleteNoteById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;