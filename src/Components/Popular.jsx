import { ArrowLeft } from "lucide-react";
import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../Partials/Cards";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";

function Popular() {
   document.title = "Movixer | Popular"
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);

  const getpopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (popular.length === 0) {
      getpopular();
    } else {
      setpopular([]);
      setpage(1);
      getpopular();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);
  return popular ? (
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
            Popular{" "}
            <span className="text-[0.6vw]  font-semibold uppercase">{category}</span>
          </h3>
        </div>
        <div className="flex justify-between w-[80%] items-center">
          <Topnav />
          <Dropdown
            title="options / category"
            onSelect={setcategory}
            options={["movie", "tv"]}
          />
         
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getpopular}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Popular;
