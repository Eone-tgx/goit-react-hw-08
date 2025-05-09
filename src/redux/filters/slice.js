import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    phone: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
      state.phone = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
