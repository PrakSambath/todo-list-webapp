import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default ({ onSelected, date }) => {
  const [startDate, setStartDate] = useState(date);
  const getTime = (date) => {
    return date.getHours() + ":" + date.getMinutes();
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        onSelected(date);
      }}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="H:mm"
    />
  );
};
