import React from "react";
import "./List.css";
import Item from "./Item";

export default function ({ items, onEdit, onDelete, onCheck, filter }) {
  const filteredItems = items.filter((e) => {
    if (filter == 0) {
      return e.status == 0;
    } else if (filter == 1) {
      return e.status == 1;
    } else {
      return true;
    }
  });

  return (
    <div className="list">
      {filteredItems.length == 0 ? (
        <div className="notodo">No Todo</div>
      ) : (
        filteredItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            time={new Date(item.time)}
            onEdit={onEdit}
            onDelete={onDelete}
            onCheck={onCheck}
          ></Item>
        ))
      )}
    </div>
  );
}
