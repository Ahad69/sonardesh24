import React from "react";
import Smaller from "../news/ui/smaller";
import International from "../news/categoryUi/international";
import style from "./international.module.css";
import Small from "../news/ui/small/small";
import NationalLeft from "../news/categoryUi/national";

const InternationalSection = ({ news }) => {
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className=" text-white text-2xl bg-green-600 p-2 w-[160px] text-center capitalize">
          আন্তর্জাতিক
        </h1>
        <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
      </div>
      <div className={style.containers}>
        <div>
          <div className="flex sm:flex-row flex-col">
            <International news={news?.[0]?.news} />

            <div className=" mx-2 sm:ml-2 flex flex-col justify-between gap-1">
              <Smaller news={news?.[1]?.news} />
              <Smaller news={news?.[2]?.news} />
              <Smaller news={news?.[3]?.news} />
              <Smaller news={news?.[4]?.news} />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
            <NationalLeft news={news?.[0]?.news} />
            <NationalLeft news={news?.[6]?.news} />
            <NationalLeft news={news?.[7]?.news} />
            <div className="block sm:hidden">
              <NationalLeft news={news?.[8]?.news} />
            </div>
          </div>
        </div>

        <div className="w-[350px] bg-red-400 m-5 h-[600px] hidden sm:block">
          <img
            className="h-full"
            src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default InternationalSection;
