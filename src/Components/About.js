import React from "react";
import "./scss/about.css";
import img1 from "./media/images/img1.jpg";

function About() {
  return (
    <div>
      <section id="team" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title" id="card-title-front">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-bullseye"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                          {"  "}Our Mission
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title">Mission</h4>
                        <p className="card-text">
                          To provide reliable professional services with
                          integrity, excellence and confidentiality in the
                          system of our firm to meet our customer's individual
                          requests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title" id="card-title-front">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                          {"  "}Our Vision
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title">Vision</h4>
                        <p className="card-text">
                          To establish a one roof platform for clients for all
                          their professional needs with the motive of
                          recognition of CA profession and to serve for nation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title" id="card-title-front">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-graph-up"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
                            />
                          </svg>
                          {"  "}Our Beliefs
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title">Vision</h4>
                        <p className="card-text">
                          We belief in moral values and accept that there is no
                          shortcut of quality professional services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="main-title">ABOUT</h1>
      <div className="row">
        <div className="col">
          <div
            className="d-flex justify-content-start pt-5"
            id="text-container"
          >
            <p>
              Sohna Tax Consultancy Services is an accounting and consultancy
              firm providing a comprehensive range of business advisory services
              to a wide range of clients from individuals to corporate. We take
              pride in providing dedicated, friendly & personalized service
              combined with comprehensive advice. Our firm is dedicated to the
              needs of businesses and to achieve their ambitions locally and
              nationaly. We work closely with our clients to interpret their
              personal and business needs, identify opportunities for growth and
              minimize the risks.
            </p>
          </div>
        </div>
        <div className="col">
          <img src={img1} className="left-img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
