import React from "react";

const EducationWedge = ({ news }) => {
  return (
    <div className="relative w-[600px] h-[440px]">
      <img className="w-full h-full border p-2" src={news?.urlToImage} />
      <h1 className="text-center text-white text-xl w-full font-bold  absolute bottom-5">
        {news?.title}
      </h1>
    </div>
  );
};

export default EducationWedge;
