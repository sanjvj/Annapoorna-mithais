import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <div className="logos">
        <div className="logos-slide-wrapper">
          <div className="logos-slide">
            {/* Flex container for image and text */}
            <div className="flex items-center">
              <img
                src="Affordable.svg"
                className="h-5 w-5 "
                alt="Affordable Icon"
              />
              <h1 className="ml-0">Affordable</h1>
            </div>
            <div className="flex items-center">
              <img
                src="Dailymade.svg"
                className="h-5 w-5 "
                alt="Affordable Icon"
              />
              <h1 className="ml-0">Daily Made</h1>
            </div>
            <div className="flex items-center">
              <img
                src="Nochemical.svg"
                className="h-5 w-5 "
                alt="Affordable Icon"
              />
              <h1 className="ml-0">No chemicals</h1>
            </div>
          </div>

          <div className="logos-slide">
            <div className="flex items-center">
              <img
                src="Affordable.svg"
                className="h-5 w-5 "
                alt="Affordable Icon"
              />
              <h1 className="ml-0">Affordable</h1>
            </div>
            <div className="flex items-center">
              <img
                src="Dailymade.svg"
                className="h-5 w-5 "
                alt="Affordable Icon"
              />
              <h1 className="ml-0">Daily Made</h1>
            </div>
            <div className="flex items-center">
              <img
                src="Nochemical.svg"
                className="h-5 w-5 "
                alt="Affordable Icon"
              />
              <h1 className="ml-0">No chemicals</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
