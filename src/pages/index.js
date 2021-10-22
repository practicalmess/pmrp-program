import React, { useRef } from 'react';
import CreditsBlock from './components/CreditsBlock.js';

const IndexPage = () => {
  const goToBio = (scrollRef) => {
    scrollRef.current.scrollIntoView();
  };

  return (
    <body>
      <header>
        <h4>Post Meridian Radio Players Present</h4>
        <ResponsiveHeroImage />
        <h3>Some other subtitle text about the two shows</h3>
      </header>
      <div>
        <ATFProgramInfo />
        <CreditsBlock show={plan9} />
        <CreditsBlock show={plan8} />
        <CreditsBlock show={crew} />
        <BTFProgramInfo />
      </div>
      <div>
        <Bios />
      </div>
      <footer>
        <SocialMediaLinks />
      </footer>
    </body>
  );
};

export default IndexPage;
