import React from "react";

const LineCategoryWedge = ({ news }) => {
  return (
    <div>
      <div className="w-[380px] h-[420px] border border-gray-200 p-2 overflow-hidden">
        <img className="w-full h-[250px]" src={news?.urlToImage} />
        <h1 className="font-bold text-xl p-1 cursor-pointer">
          {news?.title.slice(0, 60)}
        </h1>
        <p className="text-lg p-1">
          {news?.content.slice(0, 50)}
          {news?.content?.length > 50 ? <button>...Read More</button> : ""}
        </p>
      </div>
    </div>
  );
};

export default LineCategoryWedge;
