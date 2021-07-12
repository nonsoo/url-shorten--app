import "./css/layout.css";
import "./css/comp.css";

import Nav from "./Components/Nav";
import Btn from "./Components/Interactive/Btn";
import ShortenUrlComp from "./Components/Interactive/ShortenUrlComp";

import HeaderImg from "./imgs/illustration-working.svg";

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
        {/* ShortenURL comp */}
        <ShortenUrlComp />

        <div className="midSectionText">
          <p className="midSectionText__Header">Advanced Statistics</p>
          <p className="midSectionText__Descri">
            Track how your links are performing across the web with our advanced
            statistics algorithm.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
