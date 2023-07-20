import React from "react";
import LineCategoryWedge from "../news/categoryUi/lineCat";
import style from "./commoncategory.module.css";
import Lines from "../news/categoryUi/lineCat/lines";

const LineCategory = ({ news }) => {
  return (
    <div className={style.lineContainer}>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[130px]  text-center capitalize">
            লাইফস্টাইল
          </h1>
          <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
        </div>
        <LineCategoryWedge news={news[0]} />
        <Lines news={news[1]} />
        <Lines news={news[2]} />
        <Lines news={news[3]} />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[130px]  text-center capitalize">
            চাকরি
          </h1>
          <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
        </div>
        <LineCategoryWedge news={news[4]} />
        <Lines news={news[5]} />
        <Lines news={news[6]} />
        <Lines news={news[7]} />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[130px]  text-center capitalize">
            রাশিফল
          </h1>
          <h1 className="font-bold text-blue-400 text-md mr-6">সকল খবর </h1>
        </div>
        <LineCategoryWedge news={news[8]} />
        <Lines news={news[9]} />
        <Lines news={news[10]} />
        <Lines news={news[11]} />
      </div>
    </div>
  );
};

export default LineCategory;
