import React from "react";

const ShortenUrlComp = () => {
  return (
    <form className="ShortenForm">
      <input type="text" className="ShortenForm__Input" />
      <input type="submit" className="ShortenForm__btn" value="Shorten!" />
    </form>
  );
};

export default ShortenUrlComp;
