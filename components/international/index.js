import React from "react";
import Smaller from "../news/ui/smaller";
import International from "../news/categoryUi/international";
import style from "./international.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import NationalLeft from "../news/categoryUi/national";
import Link from "next/link";

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
    </div>
  );
};

export default InternationalSection;
