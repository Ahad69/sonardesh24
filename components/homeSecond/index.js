import React from "react";
import SingleNewsWithoutImage from "../news/ui/singleWithoutImage";
import style from "./second.module.css";
import Small from "../news/ui/small/small";

const HomeSecondSection = ({ news }) => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.nonAdSection}>
          <SingleNewsWithoutImage news={news?.[0]} />
          <SingleNewsWithoutImage news={news?.[1]} />
          <SingleNewsWithoutImage news={news?.[2]} />
          <div className="block sm:hidden">
            <SingleNewsWithoutImage news={news?.[3]} />
          </div>
        </div>

        <div className={style.nonAdSection}>
          <Small news={news?.[4]} />
          <Small news={news?.[5]} />

          <Small news={news?.[6]} />

          <div className="block sm:hidden">
            <Small news={news?.[7]} />
          </div>
        </div>
      </div>

      <div className="sm:w-[350px] sm:mt-10 hidden sm:block bg-red-400 sm:m-5 sm:h-[600px]">
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
