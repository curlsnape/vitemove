import { configureStore } from "@reduxjs/toolkit";
import moviereducer from './reducers/MovieReducer'
export const store = configureStore({
  reducer: {
    movies:moviereducer,
  
  },
});
