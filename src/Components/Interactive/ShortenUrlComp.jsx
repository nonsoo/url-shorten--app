import React, { useState } from "react";
import axios from "axios";

import ShortLinks from "./ShortLinks";

const ShortenUrlComp = () => {
  const [userUrl, setUserUrl] = useState("");
  const [resp, setResp] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (userUrl === "") {
      alert("please enter in a URL");
      return;
    }

    axios.get(`https://api.shrtco.de/v2/shorten?url=${userUrl}`).then((res) => {
      const responseProf = res.data;
      setResp(responseProf);
    });
  };
  console.log(resp);
  return (
    <section className="ShortenCompCon">
      <form className="ShortenForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="ShortenForm__Input"
          placeholder="Shorten a link here..."
          defaultValue={userUrl}
          onChange={(e) => setUserUrl(e.target.value)}
        />
        <input type="submit" className="ShortenForm__btn" value="Shorten it!" />
      </form>
      <div className="ShortLinksCon">
        <ShortLinks />
      </div>
    </section>
  );
};

export default ShortenUrlComp;
