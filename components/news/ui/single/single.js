import Image from "next/image";
import React from "react";

const SingleNews = ({ news }) => {
  return (
    <div className="w-[270px] h-[440px] border border-gray-200 p-2 overflow-hidden">
      <Image
        width={270}
        height={150}
        className="w-full h-[150px]"
        src={news?.image}
      />
      <h1 className="font-bold text-xl  cursor-pointer">
        {news?.title.slice(0, 100)}
      </h1>
      <p className="text-lg">
        {news?.description?.slice(0, 170)}
        {news?.description?.length > 170 ? <button>...Read More</button> : ""}
      </p>
    </div>
  );
};

export default SingleNews;
