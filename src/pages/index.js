import React, { useRef, useEffect } from 'react';
import CreditsBlock from '../components/CreditsBlock.js';
import Bios from '../components/Bios.js';
import ResponsiveHeroImage from '../components/ResponsiveHeroImage.js';
import useWindowDimensions from '../utilities/useWindowDimensions.js';
import * as Scroll from 'react-scroll';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { plan9, plan8, crew } from '../data.js';
import '../styles.scss';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
  // useEffect(() => {
  //   Events.scrollEvent.register('begin', (to, element) => {
  //     console.log('scroll begin', arguments);
  //   });
  //   Events.scrollEvent.register('end', (to, element) => {
  //     console.log('scroll end', arguments);
  //   });

  //   scrollSpy.update();
  // });
  // const bioRefs = () =>
  const goToBio = (scrollRef) => {
    scrollRef.current.scrollIntoView();
  };

  return (
    <body>
      <header>
        <h4 className="preHeader">The Post Meridian Radio Players Present</h4>
        <ResponsiveHeroImage />
        {useWindowDimensions().width < 530 && (
          <h4 className="postHeader">
            Plus! The never before revealed to the public{' '}
            <span className="highlightText">
              "Plan 8 from the Outer Ether!"
            </span>{' '}
            by Brian Rust
          </h4>
        )}
      </header>
      <div className="content">
        <div className="credits">
          {/*<ATFProgramInfo />*/}
          <CreditsBlock show={plan9} />
          <CreditsBlock show={plan8} />
          <CreditsBlock show={crew} />
          {/*<BTFProgramInfo />*/}
        </div>
        <div>
          <Bios />
        </div>
      </div>

      <footer>{/*<SocialMediaLinks />*/}</footer>
    </body>
  );
};

export default IndexPage;
