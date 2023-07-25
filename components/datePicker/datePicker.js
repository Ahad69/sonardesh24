import { DatePicker } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { formatDateToDesiredFormat } from "./util";

const DatePickers = () => {
  const router = useRouter();

  const onChange = (date, dateString) => {
    const years = new Date().toLocaleDateString();
    const inputDate = `${years}`;
    const formattedDate = formatDateToDesiredFormat(inputDate);

    if (date == null) {
      router.push(`/date/${formattedDate}`);
    } else {
      router.push(`/date/${dateString}`);
    }
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
