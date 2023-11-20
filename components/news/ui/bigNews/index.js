import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigNews = ({ news }) => {
  return (
    <div className="sm:w-[650px] h-[440px] border border-gray-200 p-1 mt-5 sm:m-0">
      <Image
        width={650}
        height={370}
        className="w-full h-[370px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg  cursor-pointer">{news?.title}</h1>
      </Link>
    </div>
  );
};

export default BigNews;
