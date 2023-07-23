import Image from "next/image";
import React from "react";

const MiddlePart = ({ news }) => {
  return (
    <div className="w-[460px] h-[450px] border border-gray-200 p-2 overflow-hidden">
      <Image
        width={460}
        height={250}
        className="w-full h-[250px]"
        src={news?.image}
      />
      <h1 className="font-bold text-xl p-1 cursor-pointer">
        {news?.title.slice(0, 80)}
      </h1>
      <p className="text-lg p-1">
        {news?.description?.slice(0, 180)}
        {news?.description?.length > 200 ? <button>...Read More</button> : ""}
      </p>
    </div>
  );
};

export default MiddlePart;
