import React from "react";
import "./List.css";
import Item from "./Item";

export default function () {
  const datas = [
    {
      id: 100,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      tag: "work",
      status: "todo",
    },
    {
      id: 101,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      tag: "finance",
      status: "todo",
    },
    {
      id: 102,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      tag: "buy",
      status: "todo",
    },
    {
      id: 103,
      title: "Title",
      description: "Description",
      time: "8:00 AM",
      tag: "person",
      status: "todo",
    },
  ];

  const lists = [];

  datas.forEach((i) => {
    lists.push(<Item data={i}></Item>);
  });

  return <div className="list">{lists}</div>;
}
