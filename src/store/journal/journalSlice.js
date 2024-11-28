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
            state.messageSaved = ''
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''

        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        // updateNote: (state, action) => {
        //     state.isSaving = false
        //     console.log(action.payload.id)
        //     state.notes = state.notes.map(note => {
        //         if(note.id === action.payload.id){
        //         note = action.payload
        //         }
        //         return note
        // })
        updateNote: (state, action) => {
            const noteIndex = state.notes.findIndex(note => note.id === action.payload.id)
            if (noteIndex >= 0) {
                state.notes[noteIndex] = action.payload
            }
            state.messageSaved = `${action.payload.title} changing success!`
            state.isSaving = false
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogOut: (state) => {
            state.isSaving = false,
                state.messageSaved = '',
                state.notes = []
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.active = null
            const noteIndex = state.notes.findIndex(note => note.id === action.payload)
            if (noteIndex >= 0) {
                state.notes.splice(noteIndex, 1)
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, setPhotosToActiveNote, clearNotesLogOut } = journalSlice.actions;