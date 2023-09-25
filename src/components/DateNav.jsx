import React from "react";
import "./DateNav.css";
import DayNav from "./DayNav";
import DatePicker from "./DatePicker";

export default function () {
  const date = new Date();
  const currentDate = date.toDateString();
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="date">
      <DatePicker></DatePicker>
      {/* <DayNav></DayNav> */}
    </div>
  );
}
