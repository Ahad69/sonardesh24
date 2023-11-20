import React from "react";
import SingleNewsWithoutImage from "../news/ui/singleWithoutImage";
import style from "./second.module.css";
import Small from "../news/ui/small/small";

const HomeSecondSection = ({ news }) => {
  return (
    <div className={style.container}>
      <div className={style.nonAdSection}>
        <SingleNewsWithoutImage news={news?.[0]?.news} />
        <SingleNewsWithoutImage news={news?.[1]?.news} />
        <SingleNewsWithoutImage news={news?.[2]?.news} />
        <Small news={news?.[3]?.news} />
        <Small news={news?.[4]?.news} />
        <Small news={news?.[5]?.news} />
      </div>

      <div className="w-[350px] bg-red-400 m-5 h-[600px]">
        {" "}
        <img
          className="h-full"
          src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
        />
      </div>
    </div>
  );
};

export default HomeSecondSection;
