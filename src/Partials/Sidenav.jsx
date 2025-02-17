import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%]  py-10 px-5 h-full border-r-[1px] border-white">
      <div className="logo flex items-center gap-2 text-2xl font-extrabold">
        <i className="ri-tv-fill font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-300"></i>
        <h2 className="">Movixer.</h2>
      </div>
      <h3 className="text-lg font-semibold capitalize mt-5 mb-3 px-1">
        Buzzing categories...
      </h3>
      <nav className="flex flex-col border-b-[1px] border-white font-semibold">
        <Link
          to="/trending"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 rounded py-3 px-1  transition-all duration-300 hover:px-5 hover:text-white"
        >
          🔥 Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 rounded py-3 px-1  transition-all duration-300 hover:px-5 hover:text-white"
        >
          🚀 Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 rounded py-3 px-1  transition-all duration-300 hover:px-5 hover:text-white"
        >
          🎬 Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 rounded py-3 px-1  transition-all duration-300 hover:px-5 hover:text-white"
        >
          📺 Tv Series
        </Link>
        <Link
          to="/person"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 rounded py-3 mb-2 px-1  transition-all duration-300 hover:px-5 hover:text-white"
        >
          🎭 People
        </Link>
      </nav>
      <nav className="flex flex-col mt-5  font-semibold">
        <h3 className="text-lg">About Movixer...</h3>
        <Link
          to="/about"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 hover:text-white rounded py-3 px-1  transition-all duration-300 hover:px-5"
        >
          📝 About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 hover:text-white rounded py-3 px-1  transition-all duration-300 hover:px-5"
        >
          📞 Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
