import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import notfound from "../assets/404.gif";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  console.log(category);
  const { video } = useSelector((state) => state[category].info);
  console.log(video);
  return (
    <div
      style={{ background: `rgba(0,0,0,0.8)` }}
      className="w-full top-0 left-0 h-screen transition-all flex justify-center items-center absolute"
    >
      <i
        onClick={() => navigate(-1)}
        className="ri-close-fill absolute text-3xl right-[15%] top-[5%]"
      ></i>
      {video ? (
     
          <ReactPlayer
            width={800}
            height={500}
            controls={true}
            volume={1}
            url={`https://www.youtube.com/watch?v=${video.key}`}
          />
       
      ) : (
        <img className="w-[800px] object-cover object-top h-[500px]" src={notfound} alt="" />
      )}
    </div>
  );
}

export default Trailer;
