import { configureStore } from "@reduxjs/toolkit";
import moviereducer from "./reducers/MovieReducer";
import tvreducer from "./reducers/TvReducer";
import personreducer from "./reducers/Peoplereducer";
export const store = configureStore({
  reducer: {
    movie: moviereducer,
    tv: tvreducer,
    person: personreducer,
  },
});
