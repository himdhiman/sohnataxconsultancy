import React, { useState, useEffect } from "react";
import "./scss/Carousal.css";
import car1 from "./media/images/car1.png";
import car2 from "./media/images/car2.png";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Carousel() {
  const mapping = { 0: "a", 1: "b" };
  const [current, setCurrent] = useState(0);
  const length = 2;
  useEffect(() => {
    document.getElementById("dot-" + mapping[current]).style.backgroundColor =
      "#fdf4f4";
    setTimeout(() => {
      document.getElementById("dot-" + mapping[current]).style.backgroundColor =
        "#4d4d4d";
      setCurrent((current + 1) % length);
    }, 10000);
  });
  const nextSlide = () => {
    document.getElementById("dot-" + mapping[current]).style.backgroundColor =
      "#4d4d4d";
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    document.getElementById("dot-" + mapping[current]).style.backgroundColor =
      "#4d4d4d";
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div>
      <div className="carousel-container">
        <div key="0">
          {current === 0 && (
            <div className="data-div1">
              <img src={car1} data-aos="fade-right"></img>
              <h1 data-aos="fade-left">
                Sohna Tax Consultancy
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  One solution for your all Tax Related Querries.
                </p>
              </h1>
            </div>
          )}
        </div>
        <div key="1">
          {current === 1 && (
            <div className="data-div2" data-aos="fade-right">
              <h1>
                Services
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                  </svg>{" "}
                  Company Registeration
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                  </svg>{" "}
                  GST
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                  </svg>{" "}
                  Audit
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-check-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                  </svg>{" "}
                  ITR
                </p>
              </h1>
              <img src={car2} data-aos="fade-left"></img>
            </div>
          )}
        </div>
      </div>
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      <div className="state-container">
        <div className="dot-container">
          <span id="dot-a"></span>
          <span id="dot-b"></span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
