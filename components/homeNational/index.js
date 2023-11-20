import React from "react";
import NationalLeft from "../news/categoryUi/national";
import style from "./national.module.css";
import NationalRight from "../news/categoryUi/national/nationalRight";

const HomeNationalSection = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl bg-green-600 p-2 w-[160px] text-center capitalize">
          জাতীয়
        </h1>
        <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
      </div>

      <div className={style.leftContainer}>
        <div className={style.left}>
          <NationalLeft news={news?.[0]?.news} />
          <NationalLeft news={news?.[1]?.news} />
          <NationalLeft news={news?.[2]?.news} />
          <NationalLeft news={news?.[3]?.news} />
        </div>
        <div className={style.right}>
          <NationalRight news={news?.[4]?.news} />
          <NationalRight news={news?.[5]?.news} />
          <NationalRight news={news?.[6]?.news} />
          <NationalRight news={news?.[7]?.news} />
          <NationalRight news={news?.[8]?.news} />
          <NationalRight news={news?.[9]?.news} />
          <NationalRight news={news?.[10]?.news} />
          <NationalRight news={news?.[11]?.news} />
        </div>
      </div>
    </div>
  );
};

export default HomeNationalSection;
