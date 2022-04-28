import React from "react";
// Import Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
// Import Images
import iphone12 from "./images/iphone12.png";
import iphone11 from "./images/iphone11.png";
import samsungS10 from "./images/samsung-s10.jpeg";

export default function App() {
  return (
    <div className="app--wrapper">
      <Nav />
      <Header />
      <div className="card--items">
        <Card
          itemImage={iphone12}
          itemName="Apple Iphone 12"
          itemPrice="509.00$"
          itemRating="4.5•(14)"
          itemStatus="LAST ITEM"
        />
        <Card
          itemImage={iphone11}
          itemName="Apple Iphone 11"
          itemPrice="409.00$"
          itemRating="4.6•(24)"
          itemStatus="SOLD"
        />
        <Card
          itemImage={samsungS10}
          itemName="Samsung S10"
          itemPrice="512.00$"
          itemRating="4.8•(20)"
        />
      </div>
    </div>
  );
}
