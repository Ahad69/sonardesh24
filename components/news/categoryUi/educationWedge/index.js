import Image from "next/image";
import React from "react";

const EducationWedge = ({ news }) => {
  return (
    <div className="relative w-[600px] h-[440px]">
      <Image
        width={600}
        height={440}
        className="w-full h-full border p-2"
        src={news?.image}
      />
      <h1 className="text-center text-white text-xl w-full font-bold  absolute bottom-5">
        {news?.title}
      </h1>
    </div>
  );
};

export default EducationWedge;
