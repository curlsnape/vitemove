import axios from "../../Utils/Axios";
import { setMovies } from "../reducers/MovieReducer";
import { removemovies } from "../reducers/MovieReducer";
export const asyncdata = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const external_id = await axios.get(`/movie/${id}/external_ids`);
    const video = await axios.get(`/movie/${id}/videos`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const watchlinks = await axios.get(`/movie/${id}/watch/providers`);
    let combineddata = {
      details: details.data,
      external_id: external_id.data,
      video: video.data.results.find((f) => (f.type = "Trailer")),
      similar: similar.data.results,
      recommendations: recommendations.data.results,
      watchlinks: watchlinks.data.results,
    };
    dispatch(setMovies(combineddata));
  } catch (error) {
    console.log(error);
  }
};
