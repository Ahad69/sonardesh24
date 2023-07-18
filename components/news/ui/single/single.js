import React from "react";

const SingleNews = ({ news }) => {
  return (
    <div className="w-[270px] h-[440px] border border-gray-200 p-2 overflow-hidden">
      <img className="w-full h-[150px]" src={news?.urlToImage} />
      <h1 className="font-bold text-xl  cursor-pointer">
        {news?.title.slice(0, 100)}
      </h1>
      <p className="text-lg">
        {news?.content.slice(0, 170)}
        {news?.content?.length > 170 ? <button>...Read More</button> : ""}
      </p>
    </div>
  );
};

export default SingleNews;
