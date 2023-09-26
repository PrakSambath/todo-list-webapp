import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DateComponent from "./components/DateNav";
import DateNav from "./components/DateNav";
import Filter from "./components/Filter";
import Category from "./components/Category";
import List from "./components/List";
import BtnNew from "./components/BtnNew";
import Modal from "./components/Modal";

function App() {
  const categories = [
    { color: "#53FF83", name: "Work", selected: false },
    { color: "#005CE5", name: "Finance", selected: false },
    { color: "#BE53FF", name: "Buy", selected: false },
    { color: "#FFBA53", name: "Person", selected: false },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    time: "",
  });
  return (
    <div id="main">
      <Header></Header>
      <DateNav></DateNav>
      <Filter></Filter>
      <Category data={categories}></Category>
      <List
        onEdit={(event) => {
          setOpenModal(true);
          setData({
            title: "todo",
            description: "new description",
            time: "8:00 AM",
          });
        }}
        onDelete={null}
        onCheck={null}
      ></List>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={null}
        data={data}
      ></Modal>
      <BtnNew
        open={() => {
          setOpenModal(true);
        }}
      ></BtnNew>
    </div>
  );
}

export default App;
