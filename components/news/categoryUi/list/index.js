import Image from "next/image";
import React from "react";

const NewsListWedge = ({ news }) => {
  return (
    <div className="flex justify-between items-center border overflow-hidden mb-5">
      <div className="m-2">
        <Image
          width={250}
          height={250}
          className="w-[350px] h-[250px]"
          src={news.image}
        />
      </div>
      <div className="w-[650px] h-[250px] mx-5 overflow-truncate">
        <h1 className="text-xl font-bold">{news?.title.slice(0, 100)}</h1>
        <h1>{news?.description}</h1>
      </div>
    </div>
  );
};

export default NewsListWedge;
