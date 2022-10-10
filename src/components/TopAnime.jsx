import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";
import { CardsContainer } from "./CardsContainer";

const TopAnime = () => {
  const topAnimes = useLoaderData().data;
  return <CardsContainer top={topAnimes} />;
};

export default TopAnime;
