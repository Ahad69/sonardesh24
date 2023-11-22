import Link from "next/link";
import React from "react";

const SingleNewsWithoutImage = ({ news }) => {
  return (
    <div className="sm:w-[270px] h-[350px] border border-gray-200 p-2 overflow-hidden">
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg  cursor-pointer">
          {news?.title?.slice(0, 50)}
        </h1>
      </Link>
      <p className="text-lg">
        <div
          className={`mt-5 text-sm sm:text-lg `}
          dangerouslySetInnerHTML={{
            __html: news?.description?.slice(0, 220),
          }}
        ></div>

        {news?.description?.length > 170 ? (
          <Link href={`/news/${news?.permalink}`}>
            {" "}
            <button>...Read More</button>{" "}
          </Link>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default SingleNewsWithoutImage;
