import React from "react";

import Btn from "./Btn";

const ShortLinks = () => {
  return (
    <div className="shortLinks">
      <p className="shortLinks__OURL">https://www.sample.com/</p>
      <div className="shortLinksGenCon">
        <p className="shortLinks__sURL">https://www.sample.com/</p>
        <Btn btnName="Copy" />
      </div>
    </div>
  );
};

export default ShortLinks;
