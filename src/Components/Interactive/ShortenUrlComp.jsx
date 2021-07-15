import React, { useState } from "react";
import axios from "axios";

import ShortLinks from "./ShortLinks";

const ShortenUrlComp = () => {
  const [userUrl, setUserUrl] = useState("");
  const [respLst, setRespLst] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (userUrl === "") {
      alert("please enter in a URL");
      return;
    }

    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${userUrl}`)
      .then((res) => {
        console.log(res);

        const respData = res.data.result;

        setRespLst([
          ...respLst,
          { oURL: respData.original_link, sURL: respData.short_link },
        ]);
      })
      .catch((err) => console.error(err));
    setUserUrl("");
  };

  const onCopyFunc = () => {
    console.log("hello");
  };
  console.log(respLst);
  return (
    <section className="ShortenCompCon">
      <form className="ShortenForm" onSubmit={onSubmit}>
        <input
          type="url"
          className="ShortenForm__Input"
          placeholder="Shorten a link here..."
          defaultValue={userUrl}
          onChange={(e) => setUserUrl(e.target.value)}
        />
        <input type="submit" className="ShortenForm__btn" value="Shorten it!" />
      </form>
      <div className="ShortLinksCon">
        {respLst &&
          respLst.length !== 0 &&
          respLst.map((urlPair) => (
            <ShortLinks
              key={Math.floor(Math.random() * 10000)}
              sURL={urlPair.sURL}
              oURL={urlPair.oURL}
              onCopy={() => onCopyFunc()}
            />
          ))}
      </div>
    </section>
  );
};

export default ShortenUrlComp;
