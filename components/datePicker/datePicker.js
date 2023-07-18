import { DatePicker } from "antd";
import React from "react";

const DatePickers = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <DatePicker
        className="w-24  sm:w-full h-6 sm:h-full"
        onChange={onChange}
      />
    </div>
  );
};

export default DatePickers;
