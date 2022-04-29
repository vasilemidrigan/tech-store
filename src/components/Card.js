import React from "react";

export default function Card({
  itemImage,
  itemName,
  itemRating,
  itemPrice,
  itemStatus,
}) {
  return (
    <div className="card">
      {itemStatus !== undefined && (
        <div className="card--status">{itemStatus}</div>
      )}
      <img src={itemImage} className="card--image" alt="iphone 12" />
      <h3 className="card--name">{itemName}</h3>
      <span className="card--rating">
        <div className="card--star--icon"></div>
        <div className="card--rating--counter">{itemRating}</div>
      </span>
      <br />
      <span className="card--price">{itemPrice}</span>
    </div>
  );
}
