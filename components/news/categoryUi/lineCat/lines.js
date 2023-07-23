import Image from "next/image";
import React from "react";

const Lines = ({ news }) => {
  return (
    <div className="w-[380px] h-[130px] border flex justify-between items-center p-2">
      <Image
        width={150}
        height={120}
        className="w-[150px]  h-[120px]"
        src={news?.image}
      />
      <h1 className="font-bold text-lg ml-1 w-[190px]   cursor-pointer">
        {news?.title?.slice(0, 60)}
      </h1>
    </div>
  );
};

export default Lines;
