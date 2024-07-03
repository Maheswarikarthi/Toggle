import React, { useState } from "react";
import "./ToggleComponent.css";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="small">
      <div className="large">
        <img
          src="https://www.svgrepo.com/show/12044/eye.svg"
          alt="Eye Logo"
        ></img>
        <h2>Name:Maheswari K</h2>
        <h3>Registration number:212221040096</h3>
        <div className="btn">
          <button className="click" onClick={toggleDetails}>
            {isVisible ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {isVisible && (
          <div className="content">
            <p>Additional student information goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleComponent;
