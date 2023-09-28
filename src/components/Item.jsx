import React, { useState, useTransition } from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function ({ item, onEdit, onDelete, onCheck }) {
  const tagColors = {
    Work: "#53FF83",
    Finance: "#005CE5",
    Buy: "#BE53FF",
    Person: "#FFBA53",
  };

  const [isChecked, setChecked] = useState(item.status);
  const [isDeleteable, setDeleteable] = useState(false);

  return (
    <div
      draggable={true}
      className={isChecked ? "item done" : "item"}
      onDragStart={(event) => {
        setDeleteable((current) => !current);
      }}
    >
      <div
        className="tag"
        style={{ backgroundColor: tagColors[item.category] }}
      ></div>
      <div className="content">
        <p className="title">{item.title}</p>
        <p className="description">{item.description}</p>
        <p className="time">
          {item.time.getHours() + ":" + item.time.getMinutes()}
        </p>
      </div>
      <div className="action">
        <span
          onClick={() => {
            onEdit(item);
          }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </span>
        <input
          checked={isChecked}
          type="checkbox"
          className="checkbox"
          onChange={(event) => {
            setChecked(event.target.checked);
            item.status = event.target.checked ? 1 : 0;
            onCheck(item);
          }}
        ></input>
      </div>
      <div className={isDeleteable ? "deleteable" : "undeleteable"}>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={(event) => {
            onDelete(item.id);
          }}
        />
      </div>
    </div>
  );
}
