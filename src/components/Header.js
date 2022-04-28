import React from "react";
import ReactDOM from "react-dom";
import hero from "../images/hero.png";

export default function Header() {
  return (
    <header>
      <h1 className="header--h1">TechStore</h1>
      <img src={hero} className="hero--image" alt="hero image" />
      <div className="header--intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis?
        </p>
      </div>
    </header>
  );
}
