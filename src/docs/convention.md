# Code Convention Guide

## 1. Folder structure

```
anb-sambath-todo-list
 📦node_modules
 ┣ All node modules
 📦public
 📦src
 ┣ 📦public
 ┣ 📂assets
 ┣ 📂components
 ┃ ┗ All react components
 ┣ 📂docs
 ┃ ┗ 📜convention.md
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
 📜README.md
```

## 2. Git Management

### 2.1. Branch

- Use `develop` branch as base source code.
- Use `feature` branch for updating new feature.
- Use `bugfix` branch for resolving bug after updating new feature.
- Use `release` branch for updating `tag` (version) and push to QA test.
- Use `hotfix` branch for resolving issue according to QA test feedback.
- Use `main` branch for releasing to public.

### 2.2. Push/Pull

- Create specific issue before developing/resolving any new issue
- **Always** use `git pull` to fetch the latest version before making any change
- Create pull request after developing/solving issue

## Project Style

- Google font
  ```
  /* import in App.css */
  @import url("https://fonts.googleapis.com/css2?family=Roboto&family=Siemreap&display=swap");
  ```
  - font-family `Roboto`, `Siemreap`, `sans-serif`
- font-size `20px`, `16px`, `12px`
- color

  - Use hash code color
  - primaryColor `#734C26`
  - secondaryColor, `#808080`
  - backgroundColor`#EBE6E0`

- grid `6 columns`

## 3. Source Code Convention

- Use `.jsx` extension for all react files.
- Create individual usable component for each view
- Write css's file names the same as react's file names for styling.
- Use PascalCase for component names and file names. For example, HelloWorld.js for a component that renders "Hello World".
- Use camelCase for variables, functions, props, and state. For example, const firstName = "John"; or function handleClick() {...}.
- Use ES6 syntax and features whenever possible. For example, use arrow functions, const and let, template literals, destructuring, etc.
- Use JSX to write your UI elements. JSX is a syntax extension that allows you to write HTML-like code in JavaScript. For example, <div className="container">Hello World</div>
- Use hooks to manage state and side effects in functional components. Hooks are special functions that let you use state and other React features without writing a class component. For example, const [count, setCount] = useState(0); or useEffect(() => {...}, [dependencies]);.
- Use the guard pattern to ensure your passed in parameters are valid. The guard pattern is a technique that checks the validity of the input before executing the rest of the function. For example, function greet(name) { if (!name) return; console.log("Hello " + name); }.
- Create pure functions and avoid side effects. A pure function is a function that always returns the same output given the same input and does not modify any external state or cause any observable changes. A side effect is any change that occurs outside of the function scope. For example, avoid using global variables, mutating parameters, calling APIs, etc.
- Avoid mutating state when working with arrays or objects. Mutating state means changing the original value of a variable or property. This can cause unexpected behavior and bugs in your app. Instead, use immutable methods or operators that return a new value without modifying the original one. For example, use const newArray = [...oldArray, newItem]; instead of oldArray.push(newItem);.

## 4 Annotation Rulse

- Use `//` for comment
- Use `/{*.....*}` for comment in jsx

## 5. Setting Source Code

### 5.1. Set Up React Project Using Vite

With NPM:

```
$ npm create vite@latest
```

With Yarn:

```
$ yarn create vite
```

With PNPM:

```
pnpm create vite
```

Then follow the prompts!

```
user/project my-project
cd my-project

npm install
npm run dev
```

Then visit local host http://localhost:3000/  
For more details visit [link]("https://vitejs.dev/guide/")

### 5.2. Set Up FontAwesome in React

1.  Add SVG Core

```
npm i --save @fortawesome/fontawesome-svg-core
```

2. Add Icon Packages

```
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

3. Add the React Component

```
npm i --save @fortawesome/react-fontawesome@latest
```

4. Using Icons with React

```
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)

```

For more details visit [link]("https://fontawesome.com/docs/web/use-with/react/")

### 5.3. Install DatePicker

The package can be installed via npm:

```
npm install react-datepicker --save
```

Or via yarn:

```
yarn add react-datepicker
```

Below is a simple example of how to use the Datepicker in a React view.

```
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
```

### Configuration

The most basic use of the DatePicker can be described with:

```
<DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
```

You can use onSelect event handler which fires each time some calendar date has been selected

```
<DatePicker
  selected={date}
  onSelect={handleDateSelect} //when day is clicked
  onChange={handleDateChange} //only when value has changed
/>
```

onClickOutside handler may be useful to close datepicker in inline mode

Time picker
You can also include a time picker by adding the showTimeSelect prop

```
<DatePicker
  selected={date}
  onChange={handleDateChange}
  showTimeSelect
  dateFormat="Pp"
/>
```

For more details visit [link]("https://www.npmjs.com/package/react-datepicker")
