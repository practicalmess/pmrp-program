import * as React from 'react';
import { data } from './data.js';

const CreditsBlock = ({ show, goToBio }) => {
  const showData = show === 'plan9' ? data.plan9 : data.plan8;
  const { showName, writerCredit, directorCredit, description, credits } =
    showData;
  return (
    <div className="programBlock">
      <h3>{showName}</h3>
      {writerCredit && <span>{writerCredit}</span>}
      {directorCredit && <span>{directorCredit}</span>}
      {description && <p>{description}</p>}
      {credits.map((credit, index) => {
        <SingleCredit
          credit={credit}
          key={index}
          handleClick={goToBio}
          className="singleCredit"
        />;
      })}
    </div>
  );
};

const SingleCredit = ({ credit, handleClick }) => {
  const { name, role } = credit;
  return (
    <div onClick={handleClick(name)}>
      {name}: {role}
    </div>
  );
};

export default CreditsBlock;
