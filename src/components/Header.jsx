import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Header({ lang, setLang }) {
  const appName = lang === 0 ? "Todo-List" : "បញ្ជីកិច្ចការ";
  const Language = ["ខ្មែរ", "English"];
  return (
    <div className="header">
      <div className="container">
        <div className="app-name">{appName}</div>
        <Button
          className="lang"
          onClick={() => setLang((previous) => (previous ? 0 : 1))}
        >
          {Language[lang]}
        </Button>
        <FontAwesomeIcon icon={faBook} />
      </div>
    </div>
  );
}
