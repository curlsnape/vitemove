import React, { useEffect, useState } from "react";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";
import Cards from "../Partials/Cards";
import axios from "../Utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  document.title = "Movixer | Trending"
  const navigate = useNavigate();
  const [duration, setduration] = useState("day");
  const [category, setcategory] = useState("all");
  const [trendy, settrendy] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);

  const gettrendy = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrendy((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (trendy.length === 0) {
      gettrendy();
    } else {
      settrendy([]);
      setpage(1);
      gettrendy();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);
  return trendy ? (
    <div className="w-full  min-h-screen bg-zinc-900 font-[figtree]">
      <div className="flex fixed shadow-sm shadow-zinc-800 w-full bg-zinc-900 px-[7.5vh] justify-between h-[10vh] items-center">
        <div className="logo  flex items-center">
          <span className="hover:text-purple-600 mr-1 transition-all" onClick={()=>navigate("/")}><ArrowLeft size={20} /></span>
          <h3 className="text-xl font-semibold">
            Trending <span className="text-[0.6vw]  font-semibold uppercase">{category}/{duration}</span>
          </h3>
        </div>
        <div className="flex justify-between w-[80%] items-center">
          <Topnav />
          <Dropdown
            title="options / category"
            onSelect={setcategory}
            options={["all", "movie", "tv"]}
          />
          <div className="w-[2vh]"></div>
          <Dropdown
            title="options / time"
            onSelect={setduration}
            options={["day", "week"]}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trendy.length}
        next={gettrendy}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trendy} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Trending;
