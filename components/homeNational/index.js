import React from "react";
import NationalLeft from "../news/categoryUi/national";
import style from "./national.module.css";
import NationalRight from "../news/categoryUi/national/nationalRight";

const HomeNationalSection = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-white text-2xl bg-green-500 p-2 w-1/12">
          জাতীয়
        </h1>
        <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
      </div>

      <div className={style.leftContainer}>
        <div className={style.left}>
          <NationalLeft news={news[0]} />
          <NationalLeft news={news[1]} />
          <NationalLeft news={news[2]} />
          <NationalLeft news={news[3]} />
        </div>
        <div className={style.right}>
          <NationalRight news={news[4]} />
          <NationalRight news={news[5]} />
          <NationalRight news={news[6]} />
          <NationalRight news={news[7]} />
          <NationalRight news={news[8]} />
          <NationalRight news={news[9]} />
          <NationalRight news={news[10]} />
          <NationalRight news={news[11]} />
        </div>
      </div>
    </div>
  );
};

export default HomeNationalSection;
