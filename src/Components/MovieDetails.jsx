import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncdata } from "../store/actions/MovieAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Horizontals from "../Partials/Horizontals";

const MovieDetails = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  document.title = "Detailpage | Movies";
  const { id } = useParams();
  const navigate = useNavigate();
  const {info} = useSelector((state) => state.movie);
  // console.log(info);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncdata(id));
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.455),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path||info.details.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full px-[10%] relative  min-h-screen"
    >
      <div className="h-[8vh] z-10 flex gap-10 items-center">
        <i onClick={() => navigate("/")} className="ri-arrow-left-line"></i>
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.external_id.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.external_id.imdb_id}`}
        >
          <span className=" flex justify-center items-center py-1 leading-none px-3 font-black bg-yellow-400 text-black rounded-sm">
            IMDb
          </span>
        </a>
      </div>
      {/* part 2 */}
      <div className="flex h-[60vh] mt-5  w-full  gap-10">
        <div className="w-[25%] h-full  shadow-xs    shadow-white">
          <img
            className="w-full h-full object-cover object-center"
            src={`https://image.tmdb.org/t/p/original/${
              info.details.backdrop_path ||
              info.details.poster_path ||
              info.poster_path
            }`}
            alt=""
          />
        </div>
        <div className="w-[75%] h-full  font-semibold  flex flex-col  gap-2">
          <h2 className="font-semibold text-5xl">{info.details.title}</h2>
          <div className="flex gap-5 items-center">
            <span className=" flex justify-center items-center  w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 text-white">
              {(info.details.vote_average * 10).toFixed()}%
            </span>
            <h4 className="text-sm">
              {info.details.genres.map((item, index) => item.name)}
            </h4>
            <h4 className="text-sm">{info.details.release_date}</h4>
            <h4 className="text-sm">{info.details.runtime} mins</h4>
          </div>
          <h4 className="font-medium">{info.details.tagline}</h4>
          <h5>{info.details.status}</h5>
          <p className="font-medium leading-4.5 h-16 text-sm overflow-y-auto ">
            {info.details.overview}
          </p>
          <Link
            to={`${pathname}/trailer`}
            className="py-2 w-fit mt-2 px-5 rounded bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-300 text-sm font-semibold text-white"
          >
            <i className="ri-play-fill text-white"></i> Watch Now
          </Link>
        </div>
      </div>
      {/* part 3 */}
      {info.watchlinks && (
        <div className="w-[50%] flex-col  my-5 h-[30vh] ">
          {info.watchlinks.buy && (
            <div className=" flex  gap-5 items-center">
              <h2>Buy links</h2>
              <div className="w-[60%] flex gap-5 ">
                {info.watchlinks.buy.map((provider, index) => (
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
          {info.watchlinks && info.watchlinks.flatrate && (
            <div className=" flex mt-5  gap-5 items-center">
              <h2>Flatrate links</h2>
              <div className="w-[60%] flex gap-5 ">
                {info.watchlinks.flatrate.map((flat, index) => (
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
          {info.watchlinks && info.watchlinks.rent && (
            <div className=" flex mt-5  gap-5 items-center">
              <h2>Rent links</h2>
              <div className="w-[60%] flex gap-5 ">
                {info.watchlinks.rent.map((flat, index) => (
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
        </div>
      )}

      {/* part 4 */}
      <div className="w-full my-5">
        <h2 className="text-3xl font-semibold">Recommendations</h2>
        <Horizontals
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet/>
    </div>
  ) : (
    <h1 className="font-semibold text-6xl h-screen w-full flex justify-center items-center">
      Loading...
    </h1>
  );
};

export default MovieDetails;
