import React from "react";
import SportsSmall from "../news/categoryUi/sportsSmall";
import SportsSmallReverse from "../news/categoryUi/sportsSmall/reverse";
import style from "./sport.module.css";
import MiddlePart from "../news/categoryUi/sportsSmall/middlePart";

const Sports = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className=" text-white text-2xl bg-green-600 p-2 w-[130px] text-center capitalize">
          খেলাধুলা
        </h1>
        <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
      </div>
      <div className={style.content}>
        <div className="block sm:hidden">
          <MiddlePart news={news?.[0]?.news} />
        </div>
        <div>
          <SportsSmall news={news?.[1]?.news} />
          <SportsSmall news={news?.[2]?.news} />
          <SportsSmall news={news?.[3]?.news} />
        </div>
        <div className="hidden sm:block">
          <MiddlePart news={news?.[0]?.news} />
        </div>
        <div>
          <SportsSmallReverse news={news?.[4]?.news} />
          <SportsSmallReverse news={news?.[5]?.news} />
          <SportsSmallReverse news={news?.[6]?.news} />
        </div>
      </div>
    </div>
  );
};

export default Sports;
