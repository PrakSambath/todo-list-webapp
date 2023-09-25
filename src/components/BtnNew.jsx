import React from "react";
import "./BtnNew.css";

export default function () {
  return (
    <div className="btn-new" onClick={(event) => alert("Add new todo")}>
      +
    </div>
  );
}
