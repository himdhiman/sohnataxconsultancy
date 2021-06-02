import React from "react";
import "./scss/service.css";

function Services() {
  return (
    <div style={{ backgroundColor: "#e9e7e7" }}>
      <div className="container" id="service-container">
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
      </div>
      <div class="container pb-3">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-1 cardsec">
              <h3>GST</h3>
              <p>
                GST Registration has started for migration of existing taxpayers
                with provisional IDs and for new registrations under the GST
                Act.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2 cardsec">
              <h3>Audit</h3>
              <p>
                Audit findings on recent compliance programmes on large
                businesses and businesses' display of GST-inclusive prices to
                the public.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3 cardsec">
              <h3>ITR</h3>
              <p>
                Comprehensive tool for income tax returns preperation and
                E-filling!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
