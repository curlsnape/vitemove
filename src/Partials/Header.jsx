import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const { tv } = useSelector((state) => state.tv);
  console.log(tv);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.poster_path
        })`,
        backgroundPosition: "top:40%",
        backgroundSize: "cover",
      }}
      className="w-[90%] text-white h-[60vh] rounded-sm mx-auto flex flex-col px-5 items-start justify-end pb-[3%] "
    >
      <div className="w-[70%]">
        <h2 className="font-semibold text-5xl mb-2">
          {data.title || data.name}
        </h2>
        <div className="middlepart flex gap-5 items-center">
          <span className="capitalize text-sm font-medium">
            {data.media_type}
          </span>
          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 rounded-full"></span>
          <span className="capitalize text-sm font-medium">
            {data.release_date || data.first_air_date}
          </span>
          {tv && (
            <h5 className="">{tv.details.genres.map((gen) => gen.name)}</h5>
          )}
          {data.adult === "true" ? (
            <span className="h-5 w-6  rounded-sm bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300  font-semibold  text-xs flex justify-center items-center">
              18+
            </span>
          ) : (
            <span className="h-5 w-6  rounded-sm bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400  font-semibold  text-xs flex justify-center items-center">
              12+
            </span>
          )}
        </div>
        <p className="leading-4 my-2 text-sm font-medium">
          {data?.overview?.length > 200
            ? `${data.overview.slice(0, 200)}...`
            : data?.overview}
          {data?.overview?.length > 200 && (
            <Link className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-indigo-500 to-purple-500">
              more
            </Link>
          )}
        </p>
        <Link className="py-2 mt-2 px-5 rounded bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 text-sm font-semibold text-white">
          <i className="ri-play-fill text-white"></i> Watch Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
