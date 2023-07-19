import React from "react";

const International = ({ news }) => {
  return (
    <div className="relative w-[550px] h-[390px]">
      <img className="w-full h-full border p-2" src={news?.urlToImage} />
      <h1 className="text-center text-white text-xl w-full font-bold  absolute bottom-5">
        {news?.title}
      </h1>
    </div>
  );
};

export default International;
