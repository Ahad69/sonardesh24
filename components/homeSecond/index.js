import React from "react";
import SingleNewsWithoutImage from "../news/ui/singleWithoutImage";
import style from "./second.module.css";
import Small from "../news/ui/small/small";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

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

      <div className="w-[350px]  m-5 sm:h-[600px]">
        <Link href={"https://www.facebook.com/sonardesh24/"} target="_blank">
          {" "}
          <div class={style.imageContainer}>
            <img className={style.image} src="/logo.png" />
            <div class={style.overlay}>
              <div className="w-[100px] rounded-full h-[100px] bg-white  flex items-center justify-center">
                <img className="w-[65px] h-[65px]" src="/bg.png" />
              </div>
              <div>
                <h1 className="text-xl  flex items-center gap-2">
                  Sonar desh24{" "}
                  <FaCheckCircle className="text-blue-500 text-lg bg-white rounded-full" />{" "}
                </h1>
                <button
                  className="bg-blue-500 flex items-start pt-1 gap-1 px-1
                "
                >
                  <BiLike className="text-xl " /> Like Page
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeSecondSection;
