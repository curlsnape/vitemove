import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Trending from "../Components/Trending";
import Popular from "../Components/Popular";
import Movie from "../Components/Movie";
import Person from "../Components/Person";
import Tv from "../Components/Tv";
import Persondetails from "../Components/Persondetails";
import TvDetails from "../Components/TvDetails";
import MovieDetails from "../Components/MovieDetails";

const Routing = () => {
  return (
    <div className="w-full h-full ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/person" element={<Person />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
      </Routes>
    </div>
  );
};

export default Routing;
