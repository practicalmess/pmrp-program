import React from "react";
import useWindowDimensions from "../utilities/useWindowDimensions.js";

const ResponsiveHeroImage = () => {
  const imgSrc =
    "https://pmrp.org/sites/default/files/SoundsFearBanner4-750x273.jpg";
  return (
    <div className="heroBannerImg">
      <img src={imgSrc} alt="The Post Meridian Radio Players present - Tomes of Terror: Sounds of Fear!" />
    </div>
  );
};

export default ResponsiveHeroImage;
