import React from "react";
import "./Item.css";

export default function (props) {
  const tagColors = {
    work: "#53FF83",
    finance: "#005CE5",
    buy: "#BE53FF",
    person: "#FFBA53",
  };
  return (
    <div className="item">
      <div
        className="tag"
        style={{ backgroundColor: tagColors[props.data.tag] }}
      ></div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="description">{props.data.description}</p>
        <p className="time">{props.data.time}</p>
      </div>
      <div className="action">
        <button className="edit"></button>
        <input type="checkbox" className="checkbox"></input>
      </div>
    </div>
  );
}
