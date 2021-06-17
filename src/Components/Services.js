import React from "react";
import "./scss/service.css";

function Services() {
  return (
    <>
      <div className="boxcontainer" data-aos="fade-up">
        <div className="box">
          <div className="heading-div">
            <h2 className="card-heading">
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
            </h2>
            <h2 className="card-heading">Our Mission</h2>
          </div>
          <p>
            To provide reliable professional services with integrity, excellence
            and confidentiality in the system of our firm to meet our customer's
            individual requests.
          </p>
        </div>
        <div className="box">
          <div className="heading-div">
            <h2 className="card-heading">
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
            </h2>
            <h2 className="card-heading">Our Vision</h2>
          </div>
          <p>
            To establish a one roof platform for clients for all their
            professional needs with the motive of recognition of CA profession
            and to serve for nation.
          </p>
        </div>
        <div className="box">
          <div className="heading-div">
            <h2 className="card-heading">
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
            </h2>
            <h2 className="card-heading">Our Belief</h2>
          </div>
          <p>
            We belief in moral values and accept that there is no shortcut of
            quality professional services.
          </p>
        </div>
      </div>
    </>

    // <div style={{ backgroundColor: "#e9e7e7" }}>
    //   <div className="container" id="service-container">
    //     <h1 style={{ textAlign: "center" }}>Our Services</h1>
    //   </div>
    //   <div class="container pb-3">
    //     <div class="row">
    //       <div class="col-md-4">
    //         <div class="card card-1 cardsec">
    //           <h3>GST</h3>
    //           <p>
    //             GST Registration has started for migration of existing taxpayers
    //             with provisional IDs and for new registrations under the GST
    //             Act.
    //           </p>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="card card-2 cardsec">
    //           <h3>Audit</h3>
    //           <p>
    //             Audit findings on recent compliance programmes on large
    //             businesses and businesses' display of GST-inclusive prices to
    //             the public.
    //           </p>
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="card card-3 cardsec">
    //           <h3>ITR</h3>
    //           <p>
    //             Comprehensive tool for income tax returns preperation and
    //             E-filling!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Services;
