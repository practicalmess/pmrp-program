import React from "react";
import useWindowDimensions from "../utilities/useWindowDimensions.js";

const ResponsiveHeroImage = () => {
  const imgSrc =
    useWindowDimensions().width >= 530
      ? "https://pmrp.org/static/plan9/banner_with_text.png"
      : "https://pmrp.org/static/plan9/simple_banner_cropped.png";
  return (
    <div className="heroBannerImg">
      <img src="http://pmrp.org/sites/default/files/riddle_of_the_super_sleuths_cropped_600x140.jpg" />
    </div>
  );
};

export default ResponsiveHeroImage;
