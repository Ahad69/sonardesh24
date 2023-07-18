import React from "react";

const BigNews = ({ news }) => {
  return (
    <div className="w-[650px] h-[440px] border border-gray-200 p-1">
      <img className="w-full h-[370px]" src={news?.urlToImage} />
      <h1 className="font-bold text-lg  cursor-pointer">{news?.title}</h1>
    </div>
  );
};

export default BigNews;
