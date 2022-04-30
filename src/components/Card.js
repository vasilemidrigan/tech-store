import React from "react";

export default function Card(props) {
  console.log(props.item);
  return (
    <div className="card">
      {props.item.status !== undefined && (
        <div className="card--status">{props.item.status}</div>
      )}
      <img className="card--image" alt="iphone 12" />
      <h3 className="card--name">{props.item.name}</h3>
      <span className="card--rating">
        <div className="card--star--icon"></div>
        <div className="card--rating--counter">{props.item.rating}</div>
      </span>
      <br />
      <span className="card--price">{props.item.price}</span>
    </div>
  );
}
