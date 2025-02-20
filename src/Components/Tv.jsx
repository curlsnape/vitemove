import { ArrowLeft } from "lucide-react";
import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../Partials/Cards";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";

function Tv() {
   document.title = "Movixer | Tv"
    const navigate = useNavigate();
    const [category, setcategory] = useState("on_the_air");
    const [tv, settv] = useState([]);
    const [hasmore, sethasmore] = useState(true);
    const [page, setpage] = useState(1);
  
    const gettv = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
        if (data.results.length > 0) {
          settv((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasmore(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const refreshHandler = () => {
      if (tv.length === 0) {
        gettv();
      } else {
        settv([]);
        setpage(1);
        gettv();
      }
    };
    useEffect(() => {
      refreshHandler();
    }, [category]);
    return tv ? (
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
                Tv Shows{" "}
                <span className="text-xs font-semibold uppercase">{category}</span>
              </h3>
            </div>
            <div className="flex justify-between w-[80%] items-center">
              <Topnav />
              <Dropdown
                title="options"
                onSelect={setcategory}
                options={["on_the_air", "popular", "airing_today", "top_rated"]}
              />
             
            </div>
          </div>
          <InfiniteScroll
            dataLength={tv.length}
            next={gettv}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
          >
            <Cards data={tv} title="tv" />
          </InfiniteScroll>
        </div>
      ) : (
        <h1>Loading...</h1>
      );
}

export default Tv