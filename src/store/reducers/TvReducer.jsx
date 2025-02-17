import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tv: null,
};
const tvreducer = createSlice({
  name: "tv",
  initialState,
  reducers: {
    settv: (state, action) => {
      state.tv = action.payload;
    },
    removetv: (state, action) => {
      state.tv = null;
    },
  },
});
export const { settv, removetv } = tvreducer.actions;
export default tvreducer.reducer;
