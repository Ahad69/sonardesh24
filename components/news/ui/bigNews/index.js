import Image from "next/image";
import React from "react";

const BigNews = ({ news }) => {
  return (
    <div className="w-[650px] h-[440px] border border-gray-200 p-1">
      <Image
        width={650}
        height={370}
        className="w-full h-[370px]"
        src={news?.image}
      />
      <h1 className="font-bold text-lg  cursor-pointer">{news?.title}</h1>
    </div>
  );
};

export default BigNews;
