import React from "react";
import { useLoaderData } from "react-router-dom";
import { CardsContainer } from "./CardsContainer";

const TopAnime = () => {
  const topAnimes = useLoaderData().data;
  return <CardsContainer top={topAnimes} />;
};

export default TopAnime;
