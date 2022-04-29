import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1 className="header--h1">TechStore</h1>
      <img src={props.hero} className="hero--image" alt="hero image" />
      <div className="header--intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis?
        </p>
      </div>
    </header>
  );
}
