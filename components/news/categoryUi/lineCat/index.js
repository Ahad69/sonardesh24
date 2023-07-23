import Image from "next/image";
import React from "react";

const LineCategoryWedge = ({ news }) => {
  return (
    <div>
      <div className="w-[380px] h-[420px] border border-gray-200 p-2 overflow-hidden">
        <Image
          width={380}
          height={250}
          className="w-full h-[250px]"
          src={news?.image}
        />
        <h1 className="font-bold text-xl p-1 cursor-pointer">
          {news?.title.slice(0, 60)}
        </h1>
        <p className="text-lg p-1">
          {news?.description?.slice(0, 50)}
          {news?.description?.length > 50 ? <button>...Read More</button> : ""}
        </p>
      </div>
    </div>
  );
};

export default LineCategoryWedge;
