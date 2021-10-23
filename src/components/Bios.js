import React from 'react';
import { data } from '../data.js';

const Bios = (refs) => {
  const rawBiosData = data.bios;
  let biosArray = [];
  rawBiosData.map((bio) => {
    let bioText =
      bio.bioText.charAt(0).toUpperCase() + bio.bioText.substring(1);
    if (bioText.substring(0, 2) !== 'Is' && bioText.substring(0, 3) !== 'Has') {
      console.log('does not start with how or is');
      biosArray.push([bio.firstName, bio.lastName, bioText]);
    } else {
      console.log('DOES start with how or is');
      const bioString = bioText.charAt(0).toLowerCase() + bioText.substring(1);
      bioText = `${bio.firstName} ${bioString}`;
      biosArray.push([bio.firstName, bio.lastName, bioText]);
    }
  });

  return (
    <div className="biosBlock">
      <h2 className="biosBlock-title">Cast & Crew Bios</h2>
      <div className="biosBlock-wrapper">
        {biosArray.map((bio) => (
          <div>
            <h3 className="biosBlock-singleBio--title">
              {bio[0]} {bio[1]}
            </h3>
            <div className="biosBlock-singleBio">{bio[2]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bios;
