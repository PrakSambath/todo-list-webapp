import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default ({ onSelected }) => {
  const [startDate, setStartDate] = useState(new Date());
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
