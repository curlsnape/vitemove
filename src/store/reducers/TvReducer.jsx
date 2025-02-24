import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
};
const tvreducer = createSlice({
  name: "tv",
  initialState,
  reducers: {
    settv: (state, action) => {
      state.info = action.payload;
    },
    removetv: (state, action) => {
      state.info = null;
    },
  },
});
export const { settv, removetv } = tvreducer.actions;
export default tvreducer.reducer;
