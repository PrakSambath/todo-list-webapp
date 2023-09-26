import React, { useState, useTransition } from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function ({ data, onEdit, onDelete, onCheck }) {
  const tagColors = {
    work: "#53FF83",
    finance: "#005CE5",
    buy: "#BE53FF",
    person: "#FFBA53",
  };

  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [time, setTime] = useState(data.time);
  const [category, setCategory] = useState(data.category);
  const [isChecked, setChecked] = useState(true);
  const [isDeleteable, setDeleteable] = useState(false);

  return (
    <div
      draggable={true}
      className={isChecked ? "item" : "item done"}
      onDragStart={(event) => {
        setDeleteable((current) => !current);
      }}
    >
      <div
        className="category"
        style={{ backgroundColor: tagColors[category] }}
      ></div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="time">{time}</p>
      </div>
      <div className="action">
        <span onClick={onEdit}>
          <FontAwesomeIcon icon={faPencil} />
        </span>
        <input
          type="checkbox"
          className="checkbox"
          onChange={(event) => {
            setChecked(!event.target.checked);
          }}
        ></input>
      </div>
      <div className={isDeleteable ? "deleteable" : "undeleteable"}>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={(event) => {
            alert("Don't delete me");
          }}
        />
      </div>
    </div>
  );
}
