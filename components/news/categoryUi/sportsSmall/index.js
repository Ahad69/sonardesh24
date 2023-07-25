import Image from "next/image";
import Link from "next/link";
import React from "react";

const SportsSmall = ({ news }) => {
  return (
    <div className="w-[350px] h-[150px] border flex justify-between items-center p-2">
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg w-[170px]  cursor-pointer">
          {news?.title.slice(0, 60)}
        </h1>
      </Link>
      <Image
        width={150}
        height={130}
        className="w-[150px]  h-[130px]"
        src={news?.image}
      />
    </div>
  );
};

export default SportsSmall;
