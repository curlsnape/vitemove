import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncdata } from "../store/actions/MovieAction";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.movies);
  console.log(movies);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncdata(id));
  }, [id]);
  return movies ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.455),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${movies.details.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full px-[10%] h-screen"
    >
      <div className="h-[8vh] z-10 flex gap-10 items-center">
      <a target="_blank" href={movies.details.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <i class="ri-external-link-line"></i>
        <i class="ri-earth-fill"></i>
        <span className=" flex justify-center items-center py-1 leading-none px-3 font-black bg-yellow-400 text-black rounded-sm">
          IMDb
        </span>
      </div>
    </div>
  ) : (
    <h1>Loading..</h1>
  );
};

export default MovieDetails;
