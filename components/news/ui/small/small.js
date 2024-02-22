import Image from "next/image";
import Link from "next/link";
import React from "react";

const Small = ({ news }) => {
  return (
    <div className="sm:w-[250px] w-[190px] h-[210px] border border-gray-200 p-1 overflow-hidden m-auto">
      <img
        width={250}
        height={150}
        alt=""
        className="w-full h-[150px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />{" "}
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-md  cursor-pointer">
          {news?.title.slice(0, 40)}
        </h1>{" "}
      </Link>
    </div>
  );
};

export default Small;
