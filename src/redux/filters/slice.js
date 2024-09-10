import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterContact } = filtersSlice.actions;
export default filtersSlice.reducer;
