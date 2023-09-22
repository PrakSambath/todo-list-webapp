import React from "react";
import "./Label.css";

export default function (props) {
  const labels = [
    { backgroundColor: "#53FF83", name: "Work" },
    { backgroundColor: "#005CE5", name: "Finance" },
    { backgroundColor: "#BE53FF", name: "Buy" },
    { backgroundColor: "#FFBA53", name: "Person" },
  ];

  const lists = [];

  labels.forEach((i) => {
    lists.push(
      <div>
        <span
          className="color"
          style={{ backgroundColor: i.backgroundColor }}
        ></span>
        <span className="name">{i.name}</span>
      </div>
    );
  });
  return <div className="label">{lists}</div>;
}
