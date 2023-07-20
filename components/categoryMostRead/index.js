import React from "react";
import NationalLeft from "../news/categoryUi/national";
import style from "./mostRead.module.css";

const MostRead = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[200px]  text-center capitalize">
          সর্বাধিক দেখা
        </h1>
        <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
      </div>
      <div className={style.content}>
        <NationalLeft news={news?.[4]} />
        <NationalLeft news={news?.[1]} />
        <NationalLeft news={news?.[2]} />
        <NationalLeft news={news?.[6]} />
      </div>
    </div>
  );
};

export default MostRead;
