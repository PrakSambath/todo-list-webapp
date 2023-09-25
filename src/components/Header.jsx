import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div className="header">
      <div className="app-name">Todo-List</div>
      <FontAwesomeIcon icon={faBook} />
    </div>
  );
}
