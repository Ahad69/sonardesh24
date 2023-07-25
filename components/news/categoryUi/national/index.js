import Image from "next/image";
import Link from "next/link";
import React from "react";

const NationalLeft = ({ news }) => {
  return (
    <div>
      <div className="w-[280px] h-[210px] border border-gray-200 p-1 overflow-hidden">
        <Image
          width={280}
          height={150}
          className="w-full h-[150px]"
          src={news?.image}
        />
        <Link href={`/news/${news?.permalink}`}>
          <h1 className="font-bold text-lg  cursor-pointer">
            {news?.title.slice(0, 40)}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default NationalLeft;
