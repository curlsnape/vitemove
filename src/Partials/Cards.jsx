import React from "react";
import noimg from "../assets/noimg.png";
import { Link } from "react-router-dom";
const Cards = ({ data, title }) => {
  console.log(title);
  console.log(data);
  return (
    <div className="w-full flex flex-wrap py-20 justify-center gap-8 h-full bg-zinc-900 ">
      {data.map((Cards, index) => {
        return (
          <Link
            to={`/${Cards.media_type || title}/details/${Cards.id}`}
            key={index}
            className="card w-[35vh] "
          >
            <img
              className="w-full h-[40vh] object-cover"
              src={
                Cards.backdrop_path || Cards.poster_path || Cards.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      Cards.backdrop_path ||
                      Cards.poster_path ||
                      Cards.profile_path
                    }`
                  : noimg
              }
              alt=""
            />
            <h4 className="semibold mt-1 text-lg leading-5">
              {Cards.name || Cards.title}
            </h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
