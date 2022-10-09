import React from "react";
import bannerImage from "../assets/banner-image.jpg";
const Banner = () => {
  const bannerOverlay = {
    backgroundImage: `linear-gradient(rgb(137 87 247 / 23%), rgb(242 242 242)), url(${bannerImage})`,
    height: "100vh",
  };
  console.log(bannerImage);
  return (
    <div>
      <div className="">
        {/* <img src={bannerImage} alt="" className="w-full" /> */}
        <div style={bannerOverlay} className=" bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default Banner;
