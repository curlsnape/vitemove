import React from "react";
import { Link } from "react-router-dom";

function Horizontals({ data }) {
  return (
    <div className="w-full h-[46vh] flex overflow-x-auto oveflow-y-hidden gap-5">
      {data.map((card, index) => {
        return (
          <Link
            to={`/${card.media_type}/details/${card.id}`}
            key={index}
            className="w-[20%] rounded-sm pb-5 mt-2 shrink-0 overflow-hidden h-[40vh] bg-zinc-800 shadow-md shadow-zinc-700"
          >
            <div className="img w-full h-[54%] ">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  card.backdrop_path || card.poster_path || card.poster_path
                }`}
                alt=""
              />
            </div>
            <div className="w-full h-[46%] p-2">
              <h3 className="text-sm font-semibold capitalize">
                {card.name || card.title}
              </h3>
              <p className="text-xs mt-1">
                {card.overview.slice(0, 100)}
                <Link className="text-xs text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-indigo-500 to-purple-500">
                  ...more
                </Link>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Horizontals;
