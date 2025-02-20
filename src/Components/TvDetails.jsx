import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynctvdata } from "../store/actions/TvActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Horizontals from "../Partials/Horizontals";

function TvDetails() {
  document.title = "Detailpage | Tv"
  const { id } = useParams();
  const navigate = useNavigate();
  const { tv } = useSelector((state) => state.tv);
  console.log(tv);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynctvdata(id));
  }, [id]);
  return tv ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.455),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${tv.details.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full px-[10%]  h-[190vh]"
    >
      <div className="h-[8vh] z-10 flex gap-10 items-center">
        <i onClick={() => navigate("/")} class="ri-arrow-left-line"></i>
        <a target="_blank" href={tv.details.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${tv.external_id.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${tv.external_id.imdb_id}`}
        >
          <span className=" flex justify-center items-center py-1 leading-none px-3 font-black bg-yellow-400 text-black rounded-sm">
            IMDb
          </span>
        </a>
      </div>
      {/* part 2 */}
      <div className="flex h-[60vh] mt-5 items-center  w-full  gap-10">
        <div className="w-[25%] h-full  shadow-xs    shadow-white">
          <img
            className="w-full h-full object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              tv.details.backdrop_path ||
              tv.details.poster_path ||
              tv.poster_path
            }`}
            alt=""
          />
        </div>
        <div className="w-[75%] h-full  font-semibold  flex flex-col  gap-2">
          <h2 className="font-semibold text-5xl">
            {tv.details.title || tv.details.name}
          </h2>
          <div className="flex gap-5 items-center">
            <span className=" flex justify-center items-center  w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 text-white">
              {(tv.details.vote_average * 10).toFixed()}%
            </span>
            <h4 className="text-sm">
              {tv.details.genres.map((item, index) => item.name)}
            </h4>
            <h4 className="text-sm">
              {tv.details.release_date || tv.details.first_air_date}
            </h4>
            <h4 className="text-sm">{tv.details.episode_run_time} mins</h4>
          </div>
          <h4 className="font-medium">{tv.details.tagline}</h4>
          <h4 className="font-medium text-sm">
            Episodes:
            {tv.details.number_of_episodes ||
              tv.details.seasons[0].episode_count}
          </h4>
          <h4 className="font-medium text-sm">
            Seasons:{tv.details.number_of_seasons}
          </h4>
          <h5>{tv.details.status}</h5>
          <p className="font-medium leading-4.5 h-16 text-sm overflow-y-auto ">
            {tv.details.overview}
          </p>
          <Link className="py-2 w-fit mt-2 px-5 rounded bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 text-sm font-semibold text-white">
            <i className="ri-play-fill text-white"></i> Watch Now
          </Link>
        </div>
      </div>
      {/* part 3 */}
      {/* <div className="w-[50%] flex-col  my-5 h-[30vh] ">
         {tv.watchlinks.buy && (
           <div className=" flex  gap-5 items-center">
             <h2>Buy links</h2>
             <div className="w-[60%] flex gap-5 ">
               {tv.watchlinks.buy.map((provider, index) => (
                 <img
                   className="w-10 h-10 object-cover rounded-full"
                   key={index}
                   src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                   alt={provider.provider_name}
                 />
               ))}
             </div>
           </div>
         )}
         {tv.watchlinks && tv.watchlinks.flatrate && (
           <div className=" flex mt-5  gap-5 items-center">
             <h2>Flatrate links</h2>
             <div className="w-[60%] flex gap-5 ">
               {tv.watchlinks.flatrate.map((flat, index) => (
                 <img
                   className="w-10 h-10 object-cover rounded-full"
                   key={index}
                   src={`https://image.tmdb.org/t/p/original${flat.logo_path}`}
                   alt={flat.provider_name}
                 />
               ))}
             </div>
           </div>
         )}
         {tv.watchlinks &&tv.watchlinks.rent && (
           <div className=" flex mt-5  gap-5 items-center">
             <h2>Rent links</h2>
             <div className="w-[60%] flex gap-5 ">
               {tv.watchlinks.rent.map((flat, index) => (
                 <img
                   className="w-10 h-10 rounded-full object-cover"
                   key={index}
                   src={`https://image.tmdb.org/t/p/original${flat.logo_path}`}
                   alt={flat.provider_name}
                 />
               ))}
             </div>
           </div>
         )}
       </div> */}
      {/* part 4 */}
      <div className="w-full   my-5">
        <h2 className="font-semibold text-3xl mb-2">Recommendations</h2>
        <Horizontals
          data={tv.recommendations.length > 0 ? tv.recommendations : tv.similar}
        />
      </div>
      <hr className="border-none bg-zinc-600 h-[1px]" />
      <div className="w-full   my-5">
        <h2 className="font-semibold text-3xl mb-2">Seasons</h2>
        <div className="w-full    flex gap-5 overflow-y-hidden">
        {tv.details.seasons.map((s, i) => (
          <div className="min-w-[16%]">
            <img
              className="h-[37vh] w-full rounded-sm object-cover object-center shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
              src={
                s.poster_path
                  ? `https://image.tmdb.org/t/p/original/${s.poster_path}`
                  : noimage
              }
              alt=""
            />
            <h1 className="font-semibold text-lg mt-2 mb-3 text-zinc-300 text-center">
              {s.name}
            </h1>
          </div>
        ))}
      </div>
      </div>
    </div>
  ) : (
    <h1 className="font-semibold text-6xl h-screen w-full flex justify-center items-center">Loading..</h1>
  );
}

export default TvDetails;
