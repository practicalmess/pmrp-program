import React, { useRef, useEffect } from "react";
import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import useWindowDimensions from "../utilities/useWindowDimensions.js";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { data } from "../data.js";
import "../styles.scss";

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

  const shows = data.shows;

  return (
    <div>
      <header>
        <h2 className="preHeader">PMRP Summer Mysteries</h2>
        <ResponsiveHeroImage />
      </header>
      <div className="content">
        <div className="credits">
          {shows.map((show) => (
            <CreditsBlock showData={show} goToBio={goToBio} />
          ))}
        </div>
        <div>
          <Bios />
        </div>
      </div>

      <footer>{/*<SocialMediaLinks />*/}</footer>
    </div>
  );
};

export default IndexPage;
