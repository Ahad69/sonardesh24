import React from "react";

const NationalRight = ({ news }) => {
  return (
    <div className="w-[270px] h-[100px] border border-gray-200 p-2 overflow-hidden">
      <h1 className="font-bold text-lg  cursor-pointer">{news?.title}</h1>
      {/* <p className="text-xl">
        {news?.description?.slice(0, 170)}
        {news?.description?.length > 170 ? <button>...Read More</button> : ""}
      </p> */}
    </div>
  );
};

export default NationalRight;
