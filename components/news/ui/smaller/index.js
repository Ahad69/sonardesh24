import Image from "next/image";
import Link from "next/link";
import React from "react";

const Smaller = ({ news }) => {
  return (
    <div className="w-[300px] h-[93px] flex justify-between items-center border p-2">
      <Image
        width={120}
        height={70}
        className="w-[120px] h-[70px]"
        src={news?.image}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className=" text-md  font-bold ml-1  w-[150px]">
          {news?.title?.slice(0, 40)}
        </h1>
      </Link>
    </div>
  );
};

export default Smaller;
