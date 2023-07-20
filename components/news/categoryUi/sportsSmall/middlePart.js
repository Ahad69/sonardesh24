import React from "react";

const MiddlePart = ({ news }) => {
  return (
    <div className="w-[460px] h-[450px] border border-gray-200 p-2 overflow-hidden">
      <img className="w-full h-[250px]" src={news?.urlToImage} />
      <h1 className="font-bold text-xl p-1 cursor-pointer">
        {news?.title.slice(0, 80)}
      </h1>
      <p className="text-lg p-1">
        {news?.content.slice(0, 180)}
        {news?.content?.length > 200 ? <button>...Read More</button> : ""}
      </p>
    </div>
  );
};

export default MiddlePart;
