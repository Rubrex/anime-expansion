import React from "react";
import { useLoaderData } from "react-router-dom";
import CardsContainer from "./CardsContainer";

const TopManga = () => {
  const topMangas = useLoaderData().data;

  return <CardsContainer top={topMangas} />;
};

export default TopManga;
