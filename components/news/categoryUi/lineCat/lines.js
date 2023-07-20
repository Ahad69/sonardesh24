import React from "react";

const Lines = ({ news }) => {
  return (
    <div className="w-[380px] h-[150px] border flex justify-between items-center p-2">
      <img className="w-[150px]  h-[130px]" src={news?.urlToImage} />
      <h1 className="font-bold text-lg ml-1 w-[170px]   cursor-pointer">
        {news?.title.slice(0, 60)}
      </h1>
    </div>
  );
};

export default Lines;
