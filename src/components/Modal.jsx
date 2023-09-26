import React from "react";
import "./Modal.css";
import Category from "./Category";
import Button from "./Button";
import TimePicker from "./TimePicker";

export default ({ data, open, onClose }) => {
  const date = new Date();

  const categories = [
    { color: "#53FF83", name: "Work", selected: true },
    { color: "#005CE5", name: "Finance", selected: false },
    { color: "#BE53FF", name: "Buy", selected: false },
    { color: "#FFBA53", name: "Person", selected: false },
  ];

  if (!open) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-tag">
          <Category data={categories}></Category>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="modal-title"
          defaultValue={data.title}
        />
        <textarea
          placeholder="Description"
          className="modal-description"
          value={data.description}
        />
        <div className="modal-footer">
          <TimePicker className="modal-time"></TimePicker>
          <div>
            <Button>Ok</Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
