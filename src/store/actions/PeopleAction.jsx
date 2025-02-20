import axios from "../../Utils/Axios";
import { setperson } from "../reducers/Peoplereducer";
import { removeperson } from "../reducers/Peoplereducer";

 const asyncpeopledata = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/person/${id}`);
    const external_id = await axios.get(`/person/${id}/external_ids`);
    const combined_credits = await axios.get(`/person/${id}/combined_credits`)
    const tv_credits = await axios.get(`/person/${id}/tv_credits`)
    const movie_credits = await axios.get(`/person/${id}/movie_credits`)
    let combineddata = {
      details: details.data,
      external_id: external_id.data,
      combined_credits: combined_credits.data,
      tv_credits: tv_credits.data,
      movie_credits: movie_credits.data,
    };
    dispatch(setperson(combineddata));
  } catch (error) {
    console.log(error);
  }
};
export default asyncpeopledata;
