import Image from "next/image";
import React from "react";

const International = ({ news }) => {
  return (
    <div className="relative w-[550px] h-[390px]">
      <Image
        width={550}
        height={390}
        className="w-full h-full border p-2"
        src={news?.image}
      />
      <h1 className="text-center text-white text-xl w-full font-bold  absolute bottom-5">
        {news?.title}
      </h1>
    </div>
  );
};

export default International;
