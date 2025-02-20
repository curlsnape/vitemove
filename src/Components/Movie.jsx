import { ArrowLeft } from "lucide-react";
import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../Partials/Cards";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";

function Movie() {
   document.title = "Movixer | Movies"
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);

  const getmovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (movie.length === 0) {
      getmovie();
    } else {
      setmovie([]);
      setpage(1);
      getmovie();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);
  return movie ? (
    <div className="w-full  min-h-screen bg-zinc-900 font-[figtree]">
      <div className="flex fixed shadow-sm shadow-zinc-800 w-full bg-zinc-900 px-[7.5vh] justify-between h-[10vh] items-center">
        <div className="logo  flex items-center">
          <span
            className="hover:text-purple-600 mr-1 transition-all"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={20} />
          </span>
          <h3 className="text-xl font-semibold">
            Movies{" "}
            <span className="text-xs font-semibold uppercase">{category}</span>
          </h3>
        </div>
        <div className="flex justify-between w-[80%] items-center">
          <Topnav />
          <Dropdown
            title="options"
            onSelect={setcategory}
            options={["now_playing", "popular", "top_rated", "upcoming"]}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={getmovie}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Movie;
