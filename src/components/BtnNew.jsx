import React from "react";
import "./BtnNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function ({ onClick }) {
  return (
    <div className="btn-new" onClick={onClick}>
      <FontAwesomeIcon icon={faCirclePlus} />
    </div>
  );
}
