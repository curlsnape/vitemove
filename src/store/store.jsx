import { configureStore } from "@reduxjs/toolkit";
import moviereducer from './reducers/MovieReducer'
import tvreducer from './reducers/TvReducer'
export const store = configureStore({
  reducer: {
    movies:moviereducer,
    tv:tvreducer,
  },
});
