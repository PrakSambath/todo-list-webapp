import React, { useState } from "react";
import "./Category.css";

export default function ({ items, onSelected, setSelection, selectable }) {
  const [selected, setSelected] = useState(setSelection);
  const lists = [];
  const content = items.map((i) => (
    <div
      className={i.name == selected ? "selected wrapper" : "wrapper"}
      onClick={() => {
        if (selectable) {
          onSelected(i.name);
          setSelected(i.name);
        }
      }}
    >
      <span className="color" style={{ backgroundColor: i.color }}></span>
      <span className="name">{i.name}</span>
    </div>
  ));

  return <div className="category">{content}</div>;
}
