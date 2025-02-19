import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState(null);
  const getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsearches();
  }, [query]);
  return (
    <div className="w-[90%] text-white relative flex items-center gap-5 mx-auto h-[15vh]">
      <i className="ri-search-line text-lg h-6 w-6  flex  justify-center items-center text-white"></i>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[80%] outline-none px-5 capitalize py-2 rounded-full border border-white"
      />
      <i
        onClick={() => setquery("")}
        className="ri-close-line transition-all absolute right-[18%] text-2xl h-6 w-6 flex justify-center items-center text-white"
      ></i>
      <div className="searches z-30 absolute  w-[80%] bg-white text-black max-h-[50vh] overflow-auto top-[80%] left-[4.5%] rounded">
        {searches &&
          searches.map((item, index) => {
            return (
              <Link
                to={`${item.media_type}/details/${item.id}`}
                key={index}
                className="px-5 flex items-center border-black border-b-[1px] py-8  gap-5"
              >
                <img
                  className="w-[35vh] h-[25vh] rounded-sm"
                  src={`https://image.tmdb.org/t/p/original/${
                    item.backdrop_path || item.poster_path || item.poster_path
                  }`}
                  alt=""
                />
                <h3>{item.name || item.title}</h3>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Topnav;
