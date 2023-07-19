import React from "react";
import EducationWedge from "../news/categoryUi/educationWedge";
import International from "../news/categoryUi/international";
import style from "./education.module.css";
import NationalLeft from "../news/categoryUi/national";

const Education = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-white text-2xl bg-green-500 p-2 w-[120px]">
          শিক্ষা
        </h1>
        <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
      </div>
      <div className={style.content}>
        <EducationWedge news={news[5]} />
        <div className={style.section}>
          {/* <EducationWedge news={news[0]} /> */}{" "}
          <NationalLeft news={news[1]} />
          <NationalLeft news={news[2]} />
          <NationalLeft news={news[3]} />
          <NationalLeft news={news[4]} />
        </div>
      </div>
    </div>
  );
};

export default Education;
