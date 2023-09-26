import React from "react";
import "./Category.css";

export default function ({ data }) {
  const lists = [];

  data.forEach((i) => {
    lists.push(
      <div className={i.selected ? "selected" : ""}>
        <span className="color" style={{ backgroundColor: i.color }}></span>
        <span className="name">{i.name}</span>
      </div>
    );
  });
  return <div className="category">{lists}</div>;
}
