import React from "react";
import IndexPage from "./index.js"


const Redirect = () => {
  window.location.replace('https://practicalmess.github.io/pmrp-program/');
  return (
    <IndexPage />
  );
};

export default Redirect;
