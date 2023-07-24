import Link from "next/link";
import React from "react";

const SingleNewsWithoutImage = ({ news }) => {
  return (
    <div className="w-[270px] h-[350px] border border-gray-200 p-2 overflow-hidden">
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg  cursor-pointer">
          {news?.title?.slice(0, 50)}
        </h1>
      </Link>
      <p className="text-lg">
        {news?.description?.slice(0, 200)}
        {news?.description?.length > 170 ? <button>...Read More</button> : ""}
      </p>
    </div>
  );
};

export default SingleNewsWithoutImage;
