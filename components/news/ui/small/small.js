import Image from "next/image";
import React from "react";

const Small = ({ news }) => {
  return (
    <div className="w-[250px] h-[210px] border border-gray-200 p-1 overflow-hidden">
      <Image
        width={250}
        height={150}
        alt=""
        className="w-full h-[150px]"
        src={news?.image}
      />
      <h1 className="font-bold text-md  cursor-pointer">
        {news?.title.slice(0, 40)}
      </h1>
    </div>
  );
};

export default Small;
