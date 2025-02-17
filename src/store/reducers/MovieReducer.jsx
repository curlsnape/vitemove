import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: null,
};
const moviereducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    removemovies: (state, action) => {
      state.movies = null;
    },
  },
});
export const { setMovies, removemovies } = moviereducer.actions;
export default moviereducer.reducer;
