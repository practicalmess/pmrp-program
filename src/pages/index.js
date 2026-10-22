import React, { useRef, useEffect } from "react";
import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import { scroller } from "react-scroll";
import { data } from "../data.js";
import "../styles.scss";
import AuditionFooter from "../components/AuditionFooter.js";

const IndexPage = () => {
  const scrollToBio = (name) => scroller.scrollTo(name);
  const imgSrc =
    "https://pmrp.org/sites/default/files/mrshawkingad.png";
  return (
    <body>
      <header>
        {/* <h4 className="preHeader">The Post Meridian Radio Players Present</h4> */}
        <ResponsiveHeroImage />
      </header>
      <div className="content">
        <div className="credits">
          {/*<ATFProgramInfo />*/}
          <div>
            <nav><ul class="nav">
              <li><a href="#show-info">Show Info</a></li>
              <li><a href="#directors-notes">Directors Notes</a></li>
              <li><a href="#credits">Credits</a></li>
              <li><a href="#bios">Cast/Crew Bios</a></li>
              <li><a href="#more">More to Enjoy</a></li>
            </ul></nav>
            <div class="programBlock" id="show-info">
              <h3 className="show-info-title">About the Show</h3>
              <p>The entire performance is roughly one hour and fifty minutes long including two ten-minute intermissions. Please click below to reveal content warnings for each show.</p>
              <strong>Content Warnings</strong>
              <details><summary>Beyond the Wall of Sleep</summary>
              misogyny, classism, infantilism, and objectification by patriarchal figures; abuse of psychiatric patient including nonconsensual drugging and clinical experimentation, restraint with a straitjacket, and general neglect.</details>
              <details><summary>The Monkey's Paw</summary>
              family member death, death of an adult child; grief & bereavement; frightening/intense suspense.</details>
              <details><summary>Phantom Frequency</summary>
              death, pregnancy, car accident, sexism/misogyny, violence.</details>
            </div>
          </div>
          <div class="programBlock" id="directors-notes">
            <h3>Directors' Notes</h3>
            <h4>Kitty Drexel</h4>
              <p>My Dearest Friends &amp; Enemies,<br />
            Welcome to the Post-Meridian Radio Player’s production Tomes of Terror: Sounds of Fear. Please stay awhile. Visit our merch table. Make a donation. Enjoy a snack.… If you dare! <br /><br />
            Within this production, there are three vastly different radio plays. First up is Beyond the Wall of Sleep, a kinder, more humane adaptation of H.P. Lovecraft’s short story of the same name. The PMRP community leans liberal and leftist. Adhering to our mission means we admit all earnest patrons - even gaunt, conservative dead men with a tenacious underbite like Howard Phillips Lovecraft. Eldritch horrors are welcome here. Hate is not.<br /><br />
            While adapter Ron Butler scrubs Beyond the Wall of Sleep of Lovecraft’s racist views, Butler skillfully employs historically accurate sexism to tell the story of a doctor who explores the cosmos on the wings of slumber. As the play’s director, I worked with my plucky cast to reduce the potential harm inherent to Lovecraft’s legacy of intolerance. I am grateful to the cast and Foley crew for taking a chance on Butler’s script and for their thoughtful, informed performances.  <br /><br />
            Second is the classic spine-tingler, The Monkey’s Paw. It is adapted by W. W. Jacobs from a story by R. A. Pauli and directed by Alex LaFreniere. In it, an English family comes into the possession of a severed monkey's paw. They’re told it grants wishes. They should be careful what they wish for. <br /><br />
            Lastly, in Phantom Frequency, an original tale by William Cameron, directed by Kristina Spinney, a mediocre man must face the consequences of his dubious actions. He is haunted by his victims through a source he cannot escape: His speeding car’s FM radio.<br />
            <br />Tomes of Terror: Sounds of Fear has a little something for everyone: delectable gender-swapping, sentient automobiles, convulsing amputations, and life’s most tasty of treats - Murder. Gird your loins and tune your radios for Tomes of Terror: Sounds of Fear!<br />
            <span>- Kitty Drexel</span></p>
            <h4>Kristina Spinney</h4>
            <p>As a lifelong horror fan, I can tell you with certainty that people are drawn to the genre because it allows us the ability to process, understand, and experience traumatic or taboo feelings and situations in a safe and controlled environment. These elements allow a true catharsis no other type of story can provide... complete with a safety ramp back to reality. A 2016 study showed that horror is the only genre to feature women more than men. Yet, instead of the typical passive victims, Monstrous Feminine Theory argues that women are frequently portrayed as the active monsters. It is through this lens that I want you to meet our monster, Anna.
            <br/><br/>
            Revenge is something nearly every human experiences--or wishes to experience--on some level. Yet this need for revenge is often portrayed as a bad thing. But what is revenge if not retaliation with reason, a chance to balance the scales once again? In Phantom Frequency, we identify with Anna. Her calm, calculated revenge feels so sweet and earned despite no human being having the right to choose who lives or dies. We indulge in her happy ending while we are still fully aware that she is the monster of this particular story.
            <br/><br/>
            In the best female revenge stories, every wrongdoer is punished, restoring justice not only to the singular woman’s life but seemingly to all common women. We need only look at the news to see how much we crave these stories, as they are so often not the case in reality. Dramatic interpretations of these emotions can help us process emotions of our own and be able to identify the highs and lows that come with both being a human and a woman. Once we acknowledge these problems, we can begin to investigate the necessary changes to improve our institutions in the future. Support Women’s Rights AND Wrongs!
            <span>- Kristina Spinney</span>
            </p>
          </div>
          {data.shows.map((show) => (
            <CreditsBlock show={show} goToBio={scrollToBio} />
          ))}
          <CreditsBlock show={data.crew} goToBio={scrollToBio} />
          {/*<BTFProgramInfo />*/}
        </div>
        <div>
          <Bios />
        </div>
      </div>
      <div class="programBlock" id="more">
        <h3>More to Enjoy</h3>
        <a href="https://pmrp.org/projects/madmensguild"><img src="https://pmrp.nyc3.cdn.digitaloceanspaces.com/program/madmansguild.jpg" alt="Madman's Guild" /></a>
        <a href="https://www.youtube.com/@mrshawking"><img src="https://pmrp.nyc3.cdn.digitaloceanspaces.com/program/mrshawkingad.png" alt="Mrs. Hawking Ad" /></a>
        <a href="https://www.theatreatfirst.org/auditions"><img src="https://pmrp.nyc3.cdn.digitaloceanspaces.com/program/theatre_at_first_enron_ad.png" alt="Theatre at First Enron Ad" /></a>
      </div>

      <footer>{/* <AuditionFooter /> */}</footer>
    </body>
  );
};

export default IndexPage;
