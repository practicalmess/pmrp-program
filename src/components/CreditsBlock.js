import * as React from 'react';
import { plan9, plan8, crew, data } from '../data.js';
import useWindowDimensions from '../utilities/useWindowDimensions.js';

const CreditsBlock = ({ show, goToBio }) => {
  console.log(useWindowDimensions());
  let showData = {};
  switch (show) {
    case plan9:
      showData = data.plan9;
      break;
    case plan8:
      showData = data.plan8;
      break;
    case crew:
      showData = data.crew;
      break;
  }
  const { showName, writerCredit, directorCredit, description, credits } =
    showData;
  // console.log(credits);
  return (
    <div className="programBlock">
      <div className="programBlock-header">
        <h3>{showName}</h3>
        {writerCredit && <h4 className="highlightCredit">{writerCredit}</h4>}
        {directorCredit && (
          <h4 className="highlightCredit">{directorCredit}</h4>
        )}
      </div>
      {description && <p>{description}</p>}
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
