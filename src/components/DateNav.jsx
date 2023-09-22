import React from "react";
import "./DateNav.css";
import DayNav from "./DayNav";

export default function () {
  const date = new Date();
  const currentDate = date.toDateString();
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="date">
      <div>
        <div className="current-date">{currentDate}</div>
        <button className="date-picker">#</button>
      </div>
      <DayNav></DayNav>
    </div>
  );
}
