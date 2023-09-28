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

  const DEFAULT_ITEMS = [
    {
      id: 0,
      title: "Title 1",
      description: "Description",
      time: new Date(2023, 8, 28, 14, 20),
      category: "Work",
      status: 0,
    },
    {
      id: 1,
      title: "Title 2",
      description: "Description",
      time: new Date(2023, 8, 28, 14, 20),
      category: "Finance",
      status: 0,
    },
    {
      id: 2,
      title: "Title 3",
      description: "Description",
      time: new Date(2023, 8, 28, 14, 20),
      category: "Buy",
      status: 0,
    },
    {
      id: 3,
      title: "Title 4",
      description: "Description",
      time: new Date(2023, 8, 28, 14, 20),
      category: "Person",
      status: 1,
    },
  ];

  const [openEditTodo, setOpenEditTodo] = useState(false);

  const [filter, setFilter] = useState(2);
  const [todoItems, setTodoItems] = useState([]);

  const DEFAULT_ITEM = {
    id: Math.random().toString(),
    title: "",
    description: "",
    time: new Date(),
    category: "Work",
    status: 0,
  };

  const [todoItem, setTodoItem] = useState(DEFAULT_ITEM);

  const [lang, setLang] = useState(0);

  const onAddTodoItem = (item) => {
    setTodoItems([{ ...item, id: Math.random().toString() }, ...todoItems]);
    setOpenAddTodo(false);
    console.log("Add new todo");
    console.log(item);
    setTodoItem(DEFAULT_ITEM);
  };

  const onSaveChangeTodoItem = (item) => {
    setOpenEditTodo(false);
    const newTodoItems = todoItems.map((e) => (e.id == item.id ? item : e));
    setTodoItems(newTodoItems);
    console.log("Edit todo");
    console.log(item);
    setTodoItem(DEFAULT_ITEM);
    // setTodoItem(DEFAULT_ITEM);
  };

  const onEditTodoItem = (item) => {
    setTodoItem(item);
    setOpenEditTodo(true);
  };

  const onDeleteTodoItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id != id);
    setTodoItems(newTodoItems);
  };

  const [openAddTodo, setOpenAddTodo] = useState(false);

  return (
    <div id="main">
      <Header lang={lang} setLang={setLang}></Header>
      <div className="container">
        <DateNav></DateNav>
        <Filter filter={filter} setFilter={setFilter} lang={lang}></Filter>
        <div id="category">
          <Category items={categories} selectable={false}></Category>
        </div>

        <List
          items={todoItems}
          filter={filter}
          onEdit={onEditTodoItem}
          onDelete={onDeleteTodoItem}
          onCheck={onSaveChangeTodoItem}
        ></List>
        <Modal
          open={openEditTodo}
          onClose={() => {
            setOpenEditTodo(false);
          }}
          onSave={onSaveChangeTodoItem}
          todoContent={todoItem}
        ></Modal>
        <Modal
          open={openAddTodo}
          onClose={() => {
            setOpenAddTodo(false);
          }}
          onSave={onAddTodoItem}
          todoContent={todoItem}
        ></Modal>
        <BtnNew
          onClick={() => {
            setOpenAddTodo(true);
            setTodoItem(DEFAULT_ITEM);
          }}
        ></BtnNew>
      </div>
    </div>
  );
}

export default App;
