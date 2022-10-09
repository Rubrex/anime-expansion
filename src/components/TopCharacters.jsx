import React from "react";
import { useLoaderData } from "react-router-dom";
import CardsContainer from "./CardsContainer";

const TopCharacters = () => {
  const topCharacters = useLoaderData().data;
  // console.log(topCharacters);
  return (
    <div>
      <CardsContainer top={topCharacters}></CardsContainer>
    </div>
  );
};

export default TopCharacters;
