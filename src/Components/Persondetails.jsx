import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import asyncpeopledata from "../store/actions/PeopleAction";
import { BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Horizontals from "../Partials/Horizontals";

function Persondetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { person } = useSelector((state) => state.person);
  console.log(person);
  useEffect(() => {
    dispatch(asyncpeopledata(id));
  }, [id]);
  return person ? (
    <div className="w-full  px-20">
      <div className="h-[8vh] w-full z-10 flex gap-10 items-center">
        <i onClick={() => navigate("/")} className="ri-arrow-left-line"></i>
      </div>
      <div className="flex w-full   gap-10">
        <div className="w-[35vh] h-full">
          <div className="img w-full h-[40vh] bg-white">
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${person.details.profile_path}`} alt="" />
          </div>
          <hr className="border-none h-[1px] bg-zinc-600 w-full mt-5" />
          <div className="flex gap-5 mt-2 w-full  items-center">
            <a
              href={`https://www.instagram.com/${person.external_id.instagram_id}`}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={`https://www.facebook.com/${person.external_id.facebook_id}`}
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={`https://www.twitter.com/${person.external_id.twitter_id}`}
            >
              <BsTwitter size={20} />
            </a>
          </div>
          <h4 className="font-medium text-xl capitalize mt-1">
            person's information
          </h4>
          <div className="w-full">
            <div className="w-full flex flex-col mb-2 mt-1">
              <h4 className="text-sm text-zinc-300">Known For</h4>
              <h5 className="text-sm font-semibold">
                {person.details.known_for_department}
              </h5>
            </div>
            <div className="w-full flex flex-col mb-2">
              <h4 className="text-sm text-zinc-300"> Birthdate</h4>
              <h5 className="text-sm font-semibold">
                {person.details.birthday}
              </h5>
            </div>
            <div className="w-full flex flex-col mb-2">
              <h4 className="text-sm text-zinc-300">Birth place</h4>
              <h5 className="text-sm font-semibold">
                {person.details.place_of_birth}
              </h5>
            </div>
            <div className="w-full flex flex-col">
              <h4 className="text-sm text-zinc-300">Gender</h4>
              <h5 className="text-sm font-semibold">
                {person.details.gender === 1 ? "female" : "male"}
              </h5>
            </div>
          </div>
        </div>
        {/* right part */}
        <div className="w-[65vw]  h-full">
          <h2 className="text-3xl mb-2 font-bold">{person.details.name}</h2>
          <p className="font-medium h-40 overflow-y-auto transition-all text-sm ">{person.details.biography}</p>
          <div className="mt-5 w-full">
            <h3 className="font-semibold text-xl ">Starred in</h3>
            <div className="w-full    flex gap-5 overflow-y-hidden">
              {person.combined_credits.cast.map((s, i) => (
                <div className="min-w-[20%]">
                  <img
                    className="h-[37vh] w-full rounded-sm object-cover object-center "
                    src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                    alt=""
                  />
                  <h1 className="font-semibold text-lg mt-2 mb-3 text-zinc-300 text-center">
                    {s.name||s.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="w-full h-screen flex justify-center items-center text-5xl font-semibold">
      loading...
    </h1>
  );
}

export default Persondetails;
