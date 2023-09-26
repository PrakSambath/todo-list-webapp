import React from "react";
import "./List.css";
import Item from "./Item";

export default function ({ data, onEdit, onDelete, onCheck }) {
  const datas = [
    {
      id: 100,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      category: "work",
      status: "todo",
    },
    {
      id: 101,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      category: "finance",
      status: "todo",
    },
    {
      id: 102,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      category: "buy",
      status: "todo",
    },
    {
      id: 103,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      category: "person",
      status: "todo",
    },
  ];

  const lists = [];

  datas.forEach((i) => {
    lists.push(
      <Item
        data={i}
        onEdit={onEdit}
        onDelete={onDelete}
        onCheck={onCheck}
      ></Item>
    );
  });

  return <div className="list">{lists}</div>;
}
