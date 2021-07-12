import "./css/layout.css";
import "./css/comp.css";

import Nav from "./Components/Nav";
import Btn from "./Components/Interactive/Btn";
import ShortenUrlComp from "./Components/Interactive/ShortenUrlComp";
import Feature from "./Components/Features";

import HeaderImg from "./imgs/illustration-working.svg";
import RecognitionImg from "./imgs/icon-brand-recognition.svg";
import DetailedImg from "./imgs/icon-detailed-records.svg";
import CustomizeImg from "./imgs/icon-fully-customizable.svg";

function App() {
  return (
    <div className="shortly--site">
      <section className="Header mainContent">
        <Nav />

        <div className="IntroCon">
          <div className="introText">
            <p className="introText__Header">More than just shorter links</p>
            <p className="introText__Descri">
              Build your brand recognition and get a detailed understanding of
              how your links are performing.
            </p>
            <Btn btnName="Get Started" cssClass="introText__Btn" />
          </div>
          <img src={HeaderImg} alt="Header Img" className="IntroImg" />
        </div>
      </section>
      <section className="midSection mainContent">
        <ShortenUrlComp />

        <div className="midSectionText">
          <p className="midSectionText__Header">Advanced Statistics</p>
          <p className="midSectionText__Descri">
            Track how your links are performing across the web with our advanced
            statistics algorithm.
          </p>
        </div>

        <div className="FeaturesCon mainContent">
          <Feature
            featureName="Brand Recognition"
            featureDescri="Boost your brand recognition with each click. Generic links don't mean a thing. Brand links help instill confidence in your product."
            featureImg={RecognitionImg}
          />
          <Feature
            featureName="Detailed Records"
            featureDescri="Gain insights to who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            featureImg={DetailedImg}
          />
          <Feature
            featureName="Fully Customizable"
            featureDescri="Improve brand awareness and content discoverability through custom links supercharging customer engagement."
            featureImg={CustomizeImg}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
