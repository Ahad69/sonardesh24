import React from "react";

const SportsSmall = ({ news }) => {
  return (
    <div className="w-[350px] h-[150px] border flex justify-between items-center p-2">
      <h1 className="font-bold text-lg w-[170px]  cursor-pointer">
        {news?.title.slice(0, 60)}
      </h1>
      <img className="w-[150px]  h-[130px]" src={news?.urlToImage} />
    </div>
  );
};

export default SportsSmall;
