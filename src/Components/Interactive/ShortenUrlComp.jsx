import React, { useState } from "react";
import axios from "axios";

import ShortLinks from "./ShortLinks";

const ShortenUrlComp = () => {
  const [userUrl, setUserUrl] = useState("");
  const [resp, setResp] = useState();
  const [respLst, setRespLst] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (userUrl === "") {
      alert("please enter in a URL");
      return;
    }

    const searchUrl = userUrl;

    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${searchUrl}`)
      .then((res) => {
        setResp(res.data.result);
      })
      .then(() => {
        setRespLst([...respLst, { oURL: userUrl, sURL: resp?.short_link }]);
      })
      .catch((err) => console.error(err));
  };
  console.log(respLst);
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
