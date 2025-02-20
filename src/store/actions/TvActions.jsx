import axios from "../../Utils/Axios";
import { settv } from "../reducers/TvReducer";
import { removetv } from "../reducers/TvReducer";
export const asynctvdata = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const external_id = await axios.get(`/tv/${id}/external_ids`);
    const video = await axios.get(`/tv/${id}/videos`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const watchlinks = await axios.get(`/tv/${id}/watch/providers`);
    let combineddata = {
      details: details.data,
      external_id: external_id.data,
      video: video.data.results.find((f) => (f.type = "Trailer")),
      similar: similar.data.results,
      recommendations: recommendations.data.results,
      watchlinks: watchlinks.data.results.IN,
    };
    dispatch(settv(combineddata));
  } catch (error) {
    console.log(error);
  }
};
