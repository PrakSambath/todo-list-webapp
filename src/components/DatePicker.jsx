import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./DatePicker.css";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      dateFormat="dd MMM yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};
