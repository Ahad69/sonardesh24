import React from "react";
import style from "./top.module.css";
import International from "../news/categoryUi/international";
import Smaller from "../news/ui/smaller";
import NationalLeft from "../news/categoryUi/national";

const CategoryTop = ({ news }) => {
  return (
    <div className={style.container}>
      <div className={style.containers}>
        <div>
          <div className="flex">
            <International news={news?.[0]} />

            <div className="ml-2 flex flex-col justify-between gap-1">
              <Smaller news={news?.[1]} />
              <Smaller news={news?.[2]} />
              <Smaller news={news?.[3]} />
              <Smaller news={news?.[4]} />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <NationalLeft news={news?.[6]} />
            <NationalLeft news={news?.[7]} />
            <NationalLeft news={news?.[8]} />
          </div>
        </div>

        <div className="w-[350px] bg-red-400 m-5 h-[600px]">
          <img
            className="h-full"
            src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryTop;
