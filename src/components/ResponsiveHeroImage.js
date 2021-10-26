import React from 'react';
import useWindowDimensions from '../utilities/useWindowDimensions.js';

const ResponsiveHeroImage = () => {
  const imgSrc =
    useWindowDimensions().width >= 530
      ? 'https://pmrp.org/static/plan9/banner_with_text.png'
      : 'https://pmrp.org/static/plan9/simple_banner_cropped.png';
  return (
    <div className="heroBannerImg">
      <img src={imgSrc} />
    </div>
  );
};

export default ResponsiveHeroImage;
