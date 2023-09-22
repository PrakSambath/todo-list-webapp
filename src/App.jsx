import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DateComponent from "./components/DateNav";
import DateNav from "./components/DateNav";
import Category from "./components/Category";
import Label from "./components/Label";
import List from "./List";
import BtnNew from "./BtnNew";

function App() {
  return (
    <div id="main">
      <Header></Header>
      <DateNav></DateNav>
      <Category></Category>
      <Label></Label>
      <List></List>
      <BtnNew></BtnNew>
    </div>
  );
}

export default App;
