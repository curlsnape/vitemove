import { ArrowLeft } from "lucide-react";
import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../Partials/Cards";
import Topnav from "../Partials/Topnav";
import Dropdown from "../Partials/Dropdown";

const Person = () => {
   document.title = "Movixer | People"
    const navigate = useNavigate();
    // const [category, setcategory] = useState("on_the_air");
    const [people, setpeople] = useState([]);
    const [hasmore, sethasmore] = useState(true);
    const [page, setpage] = useState(1);
  
    const getpeople = async () => {
      try {
        const { data } = await axios.get(`/person/popular?page=${page}`);
        if (data.results.length > 0) {
          setpeople((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasmore(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const refreshHandler = () => {
      if (people.length === 0) {
        getpeople();
      } else {
        setpeople([]);
        setpage(1);
        getpeople();
      }
    };
    useEffect(() => {
      refreshHandler();
    }, []);
    return people ? (
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
                Celebs{" "}
                {/* <span className="text-xs font-semibold uppercase">{category}</span> */}
              </h3>
            </div>
            <div className="flex justify-between w-[80%] items-center">
              <Topnav />
           
            
            </div>
          </div>
          <InfiniteScroll
            dataLength={people.length}
            next={getpeople}
            hasMore={hasmore}
            loader={<h1>Loading...</h1>}
          >
            <Cards data={people} title="person" />
          </InfiniteScroll>
        </div>
      ) : (
        <h1>Loading...</h1>
      );
}

export default Person