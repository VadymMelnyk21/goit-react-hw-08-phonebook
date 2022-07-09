import { createSlice } from '@reduxjs/toolkit';
import { contactsDefault } from 'data/contactsDefault';

const initialState = {
    items: contactsDefault,
    filter: '',
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,

    reducers: {
        addContact(state, { payload }) {
            state.items.push(payload);
        },
        deleteContact(state, { payload }) {
            state.items = state.items.filter(({ id }) => id !== payload);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
})

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;