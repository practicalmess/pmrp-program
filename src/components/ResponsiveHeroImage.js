import React from 'react';
import banner_with_text from '../images/banner_with_text.png';
import simple_banner_cropped from '../images/simple_banner_cropped.png';
import useWindowDimensions from '../utilities/useWindowDimensions.js';

const ResponsiveHeroImage = () => {
  const imgSrc =
    useWindowDimensions().width >= 530
      ? banner_with_text
      : simple_banner_cropped;
  return (
    <div className="heroBannerImg">
      <img src={imgSrc} />
    </div>
  );
};

export default ResponsiveHeroImage;
