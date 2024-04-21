import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push({ ...action.payload, id: nanoid() });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
