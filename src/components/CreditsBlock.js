import * as React from "react";
// import { plan9, plan8, crew, data } from "../data.js";
import useWindowDimensions from "../utilities/useWindowDimensions.js";

const CreditsBlock = ({ showData, goToBio }) => {
  console.log(showData);
  const { showName, writerCredit, credits } = showData;
  // console.log(credits);
  return (
    <div className="programBlock">
      <div className="programBlock-header">
        <h3>{showName}</h3>
        {writerCredit && <h4 className="highlightCredit">{writerCredit}</h4>}
      </div>
      {credits.map((credit) => (
        <SingleCredit credit={credit} handleClick={goToBio} />
      ))}
    </div>
  );
};

const SingleCredit = ({ credit, handleClick }) => {
  const { name, role } = credit;
  return (
    <div className="singleCredit">
      <span className="singleCredit-role">{role}</span>
      <span className="dots"></span>
      <span className="singleCredit-name">{name}</span>
    </div>
  );
};

export default CreditsBlock;
