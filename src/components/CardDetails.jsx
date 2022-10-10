import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const CardDetails = () => {
  const loaderData = useLoaderData().data;
  const navigate = useNavigate();
  console.log(loaderData);
  return (
    <div className=" sticky top-0 overflow-x-auto h-screen ">
      <Link
        className="py-2 px-4 bg-red-300 hover:bg-slate-400 text-white rounded-full font-extrabold float-right mb-4 absolute top-2 right-2"
        to="/topAnime"
      >
        X
      </Link>
      <img
        className="w-full mx-auto px-5"
        src={loaderData?.images?.webp.large_image_url}
        alt=""
      ></img>
      <div className="p-2 mt-4 text-slate-200">
        <h3 className="text-xl  font-bold ">{loaderData?.title_english}</h3>(
        <small className="text-md  font-medium ">{loaderData?.title}</small>)
        <div className="flex my-2">
          {loaderData?.genres?.map((gen) => (
            <small className="text-sm px-1 border text-green-500 font-bold mr-1 rounded-md">
              {gen.name}
            </small>
          ))}
        </div>
        <div className="my-3">
          <p className="text-yellow-500">
            Rank:{" "}
            <span className="border-yellow-500 border rounded-full p-1">
              {loaderData?.rank < 10
                ? `0${loaderData?.rank}`
                : loaderData?.rank}
            </span>
          </p>
        </div>
        <p className="mt-2">Year: {loaderData?.year}</p>
        <p className="mt-5">
          <span className="text-orange-300">Synopsis:</span>{" "}
          {loaderData?.synopsis}
        </p>
        <p>
          Status: <small>{loaderData?.status}</small>
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
