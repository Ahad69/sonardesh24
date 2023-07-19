import React from "react";

const NationalLeft = ({ news }) => {
  return (
    <div>
      <div className="w-[280px] h-[210px] border border-gray-200 p-1 overflow-hidden">
        <img className="w-full h-[150px]" src={news?.urlToImage} />
        <h1 className="font-bold text-lg  cursor-pointer">
          {news?.title.slice(0, 40)}
        </h1>
      </div>
    </div>
  );
};

export default NationalLeft;
