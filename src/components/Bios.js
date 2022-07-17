import React from "react";
import { data } from "../data.js";

const Bios = (refs) => {
  const biosData = data.bios;

  return (
    <div className="biosBlock">
      <h3 className="biosBlock-title">Cast & Crew Bios</h3>
      <div className="biosBlock-wrapper">
        {biosData.map((bio) => {
          return (
            <div className="biosBlock-singleBio" key={bio.bioId}>
              <h4 className="biosBlock-singleBio--title">{bio.name}</h4>
              <div className="biosBlock-singleBio--copyText">{bio.bioText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bios;
