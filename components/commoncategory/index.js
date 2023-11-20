import React from "react";
import SingleNews from "../news/ui/single/single";
import Smaller from "../news/ui/smaller";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import style from "./commoncategory.module.css";

const CommonCategorySection = ({ politics, economics, laws, info }) => {
  return (
    <div className={style.container}>
      <div>
        <div className="flex justify-between items-center">
          <h1 className=" text-white text-2xl bg-green-600 p-2 w-[100px] text-center capitalize">
            রাজনীতি
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={politics?.[0]?.news} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={politics?.[2]?.news} />
            <Smaller news={politics?.[1]?.news} />
            <Smaller news={politics?.[3]?.news} />
            <Smaller news={politics?.[4]?.news} />
            <button className="text-red-600 font-bold flex items-center justify-end">
              আরও খবর <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className=" text-white text-2xl bg-green-600 p-2 w-[120px] text-center capitalize">
            অর্থনৈতিক
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={economics?.[0]?.news} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={economics?.[1]?.news} />
            <Smaller news={economics?.[2]?.news} />
            <Smaller news={economics?.[3]?.news} />
            <Smaller news={economics?.[4]?.news} />
            <button className="text-red-600 font-bold flex items-center justify-end">
              আরও খবর <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
        <div className="flex justify-between items-center">
          <h1 className=" text-white text-2xl bg-green-600 p-2 text-center capitalize">
            আইন আদালত
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={laws?.[0]?.news} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={laws?.[1]?.news} />
            <Smaller news={laws?.[2]?.news} />
            <Smaller news={laws?.[3]?.news} />
            <Smaller news={laws?.[4]?.news} />
            <button className="text-red-600 font-bold flex items-center justify-end">
              আরও খবর <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl bg-green-600 p-2  text-center capitalize">
            তথ্য প্রযুক্তি
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={info?.[0]?.news} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={info?.[1]?.news} />
            <Smaller news={info?.[2]?.news} />
            <Smaller news={info?.[3]?.news} />
            <Smaller news={info?.[4]?.news} />
            <button className="text-red-600 font-bold flex items-center justify-end">
              আরও খবর <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCategorySection;
