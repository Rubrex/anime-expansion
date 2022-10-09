import React from "react";
import errorImage from "../assets/nani.jpg";
const ErrorPage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen flex-col"
      style={{ backgroundColor: "rgb(248, 248, 248)" }}
    >
      <img src={errorImage} alt="" width={400} />
      <h2 className="text-2xl font-bold">
        Something went missing, We must find it.
      </h2>
    </div>
  );
};

export default ErrorPage;
