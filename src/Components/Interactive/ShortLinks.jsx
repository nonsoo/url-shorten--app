import React from "react";

import Btn from "./Btn";

const ShortLinks = ({ oURL, sURL, onCopy }) => {
  return (
    <div className="shortLinks">
      <p className="shortLinks__OURL">{oURL}</p>
      <div className="shortLinksGenCon">
        <p className="shortLinks__sURL">{sURL}</p>
        <Btn btnName="Copy" onToggle={onCopy} />
      </div>
    </div>
  );
};

export default ShortLinks;

ShortLinks.defaultProps = { oURL: "sample", sURL: "sample short" };
