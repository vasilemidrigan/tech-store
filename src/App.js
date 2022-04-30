import React from "react";
// Import Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import Comments from "./components/Comments";
// Import Images
import iphone12 from "./images/iphone12.png";
import iphone11 from "./images/iphone11.png";
import samsungS10 from "./images/samsung-s10.jpeg";
import heroImage from "./images/hero.png";

// Import Data
import commentsData from "./commentsData";
import itemsData from "./itemsData";

export default function App() {
  // Mapping through comment data and pass the data to the commponent
  const commentData = commentsData.map((item) => {
    return (
      <Comments
        key={item.id}
        username={item.username}
        userComment={item.userComment}
        votes={item.votes}
      />
    );
  });
  // Mapping through itemData in order to show item
  const itemDataLoaded = itemsData.map((item, index) => {
    const imageArr = [iphone12, iphone11, samsungS10];
    return (
      <Card
        key={item.id}
        item={item}

        // When our components are massive, we can't
        // declare properties in this way, it turns in
        // a mess. Instead we can pass here the object.

        // itemImage={imageArr[index]}
        // itemName={item.name}
        // itemPrice={item.price}
        // itemRating={item.rating}
        // itemStatus={item.status}
      />
    );
  });
  // Components:
  return (
    <div className="app--wrapper">
      <Nav />
      <Header hero={heroImage} />
      <div className="card--items">{itemDataLoaded}</div>
      <div className="comment--section">
        <h3>Comments:</h3>
        {commentData}
      </div>
    </div>
  );
}
