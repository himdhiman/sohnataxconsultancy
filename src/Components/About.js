import React from "react";
import "./scss/about.css";
import img1 from "./media/images/img1.jpg";
import img2 from "./media/images/img2.jpg";

function About() {
  return (
    <>
      <div className="about-heading">
        <h1>About</h1>
      </div>
      <div className="about-div">
        <div className="about-content cont1">
          <p>
            Sohna Tax Consultancy Services is an accounting and consultancy firm
            providing a comprehensive range of business advisory services to a
            wide range of clients from individuals to corporate. We take pride
            in providing dedicated, friendly & personalized service combined
            with comprehensive advice.
          </p>
        </div>
        <div className="about-content cont2">
          <img src={img1}></img>
        </div>
        <div className="about-content cont2">
          <img src={img2}></img>
        </div>
        <div className="about-content cont1">
          <p>
            Our firm is dedicated to the needs of businesses and to achieve
            their ambitions locally and nationaly. We work closely with our
            clients to interpret their personal and business needs, identify
            opportunities for growth and minimize the risks.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
