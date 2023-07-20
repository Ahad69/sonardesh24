import React from "react";
import NewsListWedge from "../news/categoryUi/list";
import style from "./list.module.css";

const NewsList = ({ news }) => {
  return (
    <div className={style.container}>
      <div className={style.listContainer}>
        {news.map((a) => (
          <NewsListWedge news={a} />
        ))}
      </div>
      <div>
        <div className="w-[350px] bg-red-400 ml-5 h-[600px]">
          <img
            className="h-full"
            src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsList;
