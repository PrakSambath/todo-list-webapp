import React, { useState } from "react";
import "./Modal.css";
import Category from "./Category";
import Button from "./Button";
import TimePicker from "./TimePicker";

export default ({ todoContent, open, onClose, onSave }) => {
  // const date = new Date();

  const categories = [
    { color: "#53FF83", name: "Work" },
    { color: "#005CE5", name: "Finance" },
    { color: "#BE53FF", name: "Buy" },
    { color: "#FFBA53", name: "Person" },
  ];

  let title = todoContent.title;
  let description = todoContent.description;
  let time = todoContent.time;
  let category = todoContent.category;

  const onSaveHandler = () => {
    if (title != "") {
      onSave({
        id: todoContent.id,
        title: title,
        description: description,
        time: time,
        category: category,
        status: todoContent.status,
      });
    }
  };

  const onSelectedTime = (selectedTime) => {
    time = selectedTime;
    console.log(selectedTime);
  };

  const onSelectedCategory = (selectedCategory) => {
    category = selectedCategory;
  };
  if (!open) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-tag">
          <Category
            items={categories}
            onSelected={onSelectedCategory}
            setSelection={todoContent.category}
            selectable={true}
          ></Category>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="modal-title"
          defaultValue={title}
          onChange={(event) => (title = event.target.value)}
        />
        <textarea
          placeholder="Description"
          className="modal-description"
          defaultValue={description}
          onChange={(event) => (description = event.target.value)}
        />
        <div className="modal-footer">
          <TimePicker
            className="modal-time"
            onSelected={onSelectedTime}
            date={new Date(todoContent.time)}
          ></TimePicker>
          <div className="modal-button">
            <button className="btn ok" onClick={() => onSaveHandler()}>
              Ok
            </button>
            <button className="btn cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
