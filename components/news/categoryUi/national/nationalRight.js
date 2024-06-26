import Link from "next/link";
import React from "react";

const NationalRight = ({ news }) => {
  return (
    <div className="sm:w-[270px] h-[100px] border border-gray-200 p-2 overflow-hidden">
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg  cursor-pointer">{news?.title}</h1>{" "}
      </Link>
      {/* <p className="text-xl">
        {news?.description?.slice(0, 170)}
        {news?.description?.length > 170 ? <button>...Read More</button> : ""}
      </p> */}
    </div>
  );
};

export default NationalRight;
