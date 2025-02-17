import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  person: null,
};
const personreducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    setperson: (state, action) => {
      state.person = action.payload;
    },
    removeperson: (state, action) => {
      state.person = null;
    },
  },
});
export const { setperson, removeperson } = personreducer.actions;
export default personreducer.reducer;
