import React, { useState, useEffect } from "react";
import TopHeader from "./Components/TopHeader";
import "./Components/app.css";
import Services from "./Components/Services";
import About from "./Components/About";
import ServicesFinal from "./Components/ServicesFinal";
import Contact from "./Components/Contact";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <TopHeader />
      <Carousel />
      <Services />
      <About />
      <ServicesFinal />
      <Contact />
    </>
  );
}

export default App;
