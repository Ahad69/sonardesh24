import React from "react";

const SingleNewsWithoutImage = ({ news }) => {
  return (
    <div className="w-[270px] h-[350px] border border-gray-200 p-2 overflow-hidden">
      <h1 className="font-bold text-xl  cursor-pointer">
        {news?.title?.slice(0, 50)}
      </h1>
      <p className="text-xl">
        {news?.content?.slice(0, 170)}
        {news?.content?.length > 170 ? <button>...Read More</button> : ""}
      </p>
    </div>
  );
};

export default SingleNewsWithoutImage;
