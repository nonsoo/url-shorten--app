import React from "react";

const ShortenUrlComp = () => {
  return (
    <section className="ShortenCompCon">
      <form className="ShortenForm">
        <input
          type="text"
          className="ShortenForm__Input"
          placeholder="Shorten a link here..."
        />
        <input type="button" className="ShortenForm__btn" value="Shorten it!" />
      </form>
    </section>
  );
};

export default ShortenUrlComp;
