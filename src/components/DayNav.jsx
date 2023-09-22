import React from "react";
import "./DayNav.css";

export default function DayNav(props) {
  const days = [];
  const currentDate = new Date();
  for (let i = 5; i >= 0; i--) {
    days.push(currentDate.getDate() - i);
  }
  for (let i = 1; i <= 5; i++) {
    days.push(currentDate.getDate() + i);
  }

  const list = [];

  days.forEach((d) => {
    if (d == currentDate.getDate()) {
      list.push(<li className="day-nav-item active">{d}</li>);
    } else {
      list.push(<li className="day-nav-item">{d}</li>);
    }
  });

  return (
    <ul className="day-nav">
      <li className="previous day-nav-item">{"<"}</li>
      {list}
      <li className="next day-nav-item">{">"}</li>
    </ul>
  );
}
