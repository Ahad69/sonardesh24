import React from "react";
import LineCategoryWedge from "../news/categoryUi/lineCat";
import style from "./commoncategory.module.css";
import Lines from "../news/categoryUi/lineCat/lines";

const LineCategory = ({ lifestyle, rashi, jobs }) => {
  return (
    <div className={style.lineContainer}>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl bg-green-600 p-2 w-[130px]  text-center capitalize">
            লাইফস্টাইল
          </h1>
          <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
        </div>
        <LineCategoryWedge news={lifestyle?.[0]?.news} />
        <Lines news={lifestyle?.[1]?.news} />
        <Lines news={lifestyle?.[2]?.news} />
        <Lines news={lifestyle?.[3]?.news} />
      </div>
      <div>
        <div className="flex justify-between items-center mt-10 sm:mt-0">
          <h1 className=" text-white text-2xl bg-green-600 p-2 w-[130px]  text-center capitalize">
            চাকরি
          </h1>
          <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
        </div>
        <LineCategoryWedge news={jobs?.[0]?.news} />
        <Lines news={jobs?.[0]?.news} />
        <Lines news={jobs?.[2]?.news} />
        <Lines news={jobs?.[3]?.news} />
      </div>
      <div>
        <div className="flex justify-between items-center  mt-10 sm:mt-0">
          <h1 className=" text-white text-2xl bg-green-600 p-2 w-[130px]  text-center capitalize">
            রাশিফল
          </h1>
          <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
        </div>
        <LineCategoryWedge news={rashi?.[0]?.news} />
        <Lines news={rashi?.[1]?.news} />
        <Lines news={rashi?.[2]?.news} />
        <Lines news={rashi?.[3]?.news} />
      </div>
    </div>
  );
};

export default LineCategory;
