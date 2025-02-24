import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
};
const moviereducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.info = action.payload;
    },
    removemovies: (state, action) => {
      state.info = null;
    },
  },
});
export const { setMovies, removemovies } = moviereducer.actions;
export default moviereducer.reducer;
