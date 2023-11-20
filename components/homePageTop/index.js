import React, { useEffect, useState } from "react";
import Small from "../news/ui/small/small";
import SingleNews from "../news/ui/single/single";
import BigNews from "../news/ui/bigNews";
import style from "./homeTop.module.css";

const HomePageTop = ({ news }) => {
  return (
    <div className={style.container}>
      <div className={style.smallContainer}>
        <Small news={news?.[0]?.news} />
        <br />
        <Small news={news?.[1]?.news} />
      </div>
      <div>
        <SingleNews news={news?.[2]?.news} />
      </div>
      <div>
        <BigNews news={news?.[3]?.news} />
      </div>
    </div>
  );
};

export default HomePageTop;
