import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

const selectFilters = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters)
    );
  }
);
