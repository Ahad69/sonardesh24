import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsListWedge = ({ news }) => {
  return (
    <div className="flex justify-between items-center border overflow-hidden mb-5">
      <div className="m-2">
        <Image
          width={450}
          height={250}
          className="w-[450px] h-[250px]"
          src={news.image}
        />
      </div>
      <div className="w-[550px] h-[250px] mx-5">
        <Link href={`/news/${news?.permalink}`}>
          <h1 className="text-2xl font-bold truncate">
            {news?.title.slice(0, 30)} {news?.title?.length > 30 ? "..." : ""}
          </h1>
          <h1 className="text-lg">
            {news?.description.slice(0, 350)}{" "}
            {news?.description?.length > 400 ? <b>... বিস্তারিত পড়ুন</b> : ""}
          </h1>
        </Link>
      </div>{" "}
    </div>
  );
};

export default NewsListWedge;
