import React, { useState } from "react";
import "./Filter.css";

export default function ({ filter, setFilter, lang }) {
  const FILTERS =
    lang == 0 ? ["All", "Todo", "Done"] : ["ទាំងអស់", "ត្រូវធ្វើ", "ធ្វើរួច"];
  return (
    <div className="filter">
      <button
        className={filter === 2 ? "btn active" : "btn"}
        onClick={(event) => setFilter(2)}
      >
        {FILTERS[0]}
      </button>
      <button
        className={filter === 0 ? "btn active" : "btn"}
        onClick={(event) => setFilter(0)}
      >
        {FILTERS[1]}
      </button>
      <button
        className={filter === 1 ? "btn active" : "btn"}
        onClick={(event) => setFilter(1)}
      >
        {FILTERS[2]}
      </button>
    </div>
  );
}
