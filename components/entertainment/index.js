import React from "react";
import SportsSmall from "../news/categoryUi/sportsSmall";
import SportsSmallReverse from "../news/categoryUi/sportsSmall/reverse";
import style from "./entertain.module.css";
import MiddlePart from "../news/categoryUi/sportsSmall/middlePart";

const Entertainment = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className=" text-white text-2xl bg-green-600 p-2 w-[180px] text-center capitalize">
          বিনোদন
        </h1>
        <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
      </div>
      <div className={style.content}>
        <div>
          <SportsSmall news={news?.[0]} />
          <SportsSmall news={news?.[1]} />
          <SportsSmall news={news?.[2]} />
        </div>
        <MiddlePart news={news?.[6]} />
        <div>
          <SportsSmallReverse news={news?.[3]} />
          <SportsSmallReverse news={news?.[4]} />
          <SportsSmallReverse news={news?.[5]} />
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
