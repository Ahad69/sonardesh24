import React from "react";
import NationalLeft from "../news/categoryUi/national";
import style from "./national.module.css";
import NationalRight from "../news/categoryUi/national/nationalRight";
import EducationWedge from "../news/categoryUi/educationWedge";

const WholeCountry = ({ news }) => {
  return (
    <>
      {" "}
      <div className={style.container}>
        <div className="flex justify-between items-center">
          <h1 className=" text-white text-2xl bg-green-600 p-2 w-[130px]  text-center capitalize">
            সারাদেশ
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className={style.content}>
          <EducationWedge news={news?.[0]?.news} />
          <div className={style.section}>
            {/* <EducationWedge news={news?.[0]} /> */}{" "}
            <NationalLeft news={news?.[1]?.news} />
            <NationalLeft news={news?.[2]?.news} />
            <NationalLeft news={news?.[3]?.news} />
            <NationalLeft news={news?.[4]?.news} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WholeCountry;
