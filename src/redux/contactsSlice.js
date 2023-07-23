import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
}
  
const contactsSlice = createSlice({
    //Nombre del slice
    name: "contacts",
    // Estado inicial del reducer del slice
    initialState: contactsInitialState,
    //Ojeto de reducers
    reducers: {
        // addContact(state, action) {
        //     state.items.push({ id: nanoid(), name: action.payload.name, number: action.payload.number });  
        // },
        // deleteContact(state, action) {
        //     const index = state.items.findIndex(contact => contact.id === action.payload);
        //     state.items.splice(index, 1);
        // },
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
            console.log("Payload ",payload);
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        }
    }
});

//Creadores de acciones
// export const {addContact, deleteContact } = contactsSlice.actions;
// Reducer del slice
export const contactsReducer = contactsSlice.reducer;