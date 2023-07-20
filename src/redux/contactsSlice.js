import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
]
  
const contactsSlice = createSlice({
    //Nombre del slice
    name: "contacts",
    // Estado inicial del reducer del slice
    initialState: contactsInitialState,
    //Ojeto de reducers
    reducers: {
        addContact(state, action) {
            state.push({ id: nanoid(), name: action.payload.name, number: action.payload.number });  
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    },
});

//Creadores de acciones
export const { addContact, deleteContact } = contactsSlice.actions;
// Reducer del slice
export const contactsReducer = contactsSlice.reducer;