import React from 'react';
import { data } from '../data.js';

const Bios = (refs) => {
  const rawBiosData = data.bios;
  let biosArray = [];
  rawBiosData.map((bio) => {
    let bioText =
      bio.bioText.charAt(0).toUpperCase() + bio.bioText.substring(1);
    if (bioText.substring(0, 2) !== 'Is' && bioText.substring(0, 3) !== 'Has') {
      biosArray.push({
        firstName: bio.firstName,
        lastName: bio.lastName,
        bioText: bio.bioText,
        bioId: bio.timestamp,
      });
    } else {
      const bioString = bioText.charAt(0).toLowerCase() + bioText.substring(1);
      bioText = `${bio.firstName} ${bioString}`;
      biosArray.push({
        firstName: bio.firstName,
        lastName: bio.lastName,
        bioText,
        bioId: bio.timestamp,
      });
    }
  });

  return (
    <div className="biosBlock">
      <h3 className="biosBlock-title">Cast & Crew Bios</h3>
      <div className="biosBlock-wrapper">
        {biosArray.map((bio) => {
          return (
            <div className="biosBlock-singleBio" id={bio.bioId}>
              <h4 className="biosBlock-singleBio--title">
                {bio.firstName} {bio.lastName}
              </h4>
              <div className="biosBlock-singleBio--copyText">{bio.bioText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bios;
