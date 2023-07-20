import React from "react";
import SingleNews from "../news/ui/single/single";
import Smaller from "../news/ui/smaller";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import style from "./commoncategory.module.css";

const CommonCategorySection = ({ news }) => {
  return (
    <div className={style.container}>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[100px] text-center capitalize">
            রাজনীতি
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={news?.[0]} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={news?.[2]} />
            <Smaller news={news?.[1]} />
            <Smaller news={news?.[3]} />
            <Smaller news={news?.[4]} />
            <button className="text-red-600 font-bold flex items-center justify-end">
              আরও খবর <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[120px] text-center capitalize">
            অর্থনৈতিক
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={news?.[6]} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={news?.[7]} />
            <Smaller news={news?.[8]} />
            <Smaller news={news?.[9]} />
            <Smaller news={news?.[10]} />
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
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[160px] text-center capitalize">
            আইন আদালত
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={news?.[11]} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={news?.[12]} />
            <Smaller news={news?.[13]} />
            <Smaller news={news?.[14]} />
            <Smaller news={news?.[15]} />
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
          <h1 className="font-bold text-white text-xl bg-green-500 p-2 w-[130px] text-center capitalize">
            তথ্য প্রযুক্তি
          </h1>
          <h1 className="font-bold text-blue-400 text-lg mr-6">সকল খবর </h1>
        </div>
        <div className="flex">
          <SingleNews news={news?.[16]} />
          <div className="flex flex-col gap-2 mx-2">
            <Smaller news={news?.[17]} />
            <Smaller news={news?.[18]} />
            <Smaller news={news?.[19]} />
            <Smaller news={news?.[20]} />
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
