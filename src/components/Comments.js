import React from "react";

export default function Comments(props) {
  return (
    <div className="comments">
      <div className="user--feedback">
        <div className="username"> • {props.username}</div>
        <div className="comment"> - {props.userComment}</div>
        {typeof props.votes === "number" && (
          <div className="votes"> likes: {props.votes}</div>
        )}
      </div>
    </div>
  );
}
