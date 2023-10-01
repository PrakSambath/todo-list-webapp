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

  const USER_KEY = "todolist";
  function getLocalData(userKey) {
    const data = window.localStorage.getItem(userKey);
    console.log("get data: ", JSON.parse(data));
    return data ? JSON.parse(data) : [];
  }
  function storeLocalData(userKey, userData) {
    console.log("store data: ", JSON.stringify(userData));
    window.localStorage.clear();
    window.localStorage.setItem(userKey, JSON.stringify(userData));
  }

  const localData = getLocalData(USER_KEY);
  const [todoItems, setTodoItems] = useState(localData);
  const [openEditTodo, setOpenEditTodo] = useState(false);

  const [filter, setFilter] = useState(2);

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
    const newTodoItems = [
      { ...item, id: Math.random().toString() },
      ...todoItems,
    ];
    storeLocalData(USER_KEY, newTodoItems);
    setTodoItems(newTodoItems);
    setOpenAddTodo(false);
    setTodoItem(DEFAULT_ITEM);
    console.log("Add :", item);
  };

  const onSaveChangeTodoItem = (item) => {
    setOpenEditTodo(false);
    const newTodoItems = todoItems.map((e) => (e.id == item.id ? item : e));
    storeLocalData(USER_KEY, newTodoItems);
    setTodoItems(newTodoItems);
    setTodoItem(DEFAULT_ITEM);
    console.log("Edit :", item);
  };

  const onEditTodoItem = (item) => {
    setTodoItem(item);
    setOpenEditTodo(true);
  };

  const onDeleteTodoItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id != id);
    storeLocalData(USER_KEY, newTodoItems);
    setTodoItems(newTodoItems);
    console.log("Delete Id:", id);
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
