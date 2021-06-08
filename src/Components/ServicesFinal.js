import React from "react";
import "./scss/servicesfinal.css";

function ServicesFinal() {
  return (
    <>
      <div className="service-heading">
        <h1>Our Services</h1>
      </div>

      <div className="service-cards">
        <div className="card one">
          <h2>GST</h2>
          <p>
            GST Registration has started for migration of existing taxpayers
            with provisional IDs and for new registrations under the GST Act.
          </p>
        </div>
        <div className="card two">
          <h2>Audit</h2>
          <p>
            Audit findings on recent compliance programmes on large businesses
            and businesses' display of GST-inclusive prices to the public.
          </p>
        </div>
        <div className="card three">
          <h2>ITR</h2>
          <p>
            Comprehensive tool for income tax returns preperation and E-filling!
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesFinal;
