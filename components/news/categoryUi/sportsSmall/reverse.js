import Image from "next/image";
import Link from "next/link";
import React from "react";

const SportsSmallReverse = ({ news }) => {
  return (
    <div className="w-[350px] h-[150px] border flex justify-between items-center p-2 overflow-hidden">
      <Image
        width={150}
        height={130}
        className="w-[150px]  h-[130px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg ml-1 w-[170px]   cursor-pointer">
          {news?.title?.slice(0, 50)}
        </h1>
      </Link>
    </div>
  );
};

export default SportsSmallReverse;
