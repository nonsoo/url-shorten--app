import React from "react";

const Features = ({ featureName, featureDescri, featureImg }) => {
  return (
    <div className="Features">
      <div className="FeatureImgCon">
        <img src={featureImg} alt="featureImg" className="Features__Img" />
      </div>
      <div className="FeaturesTextCon">
        <p className="Features__Header">{featureName}</p>
        <p className="Feature__Descri">{featureDescri}</p>
      </div>
    </div>
  );
};

export default Features;
