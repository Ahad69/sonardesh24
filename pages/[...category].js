import MostRead from "@/components/categoryMostRead";
import CategoryTop from "@/components/categoryTop";
import NewsList from "@/components/newsList";
import Layout from "@/components/shared/layout/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const SubCategory = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-07-20&sortBy=publishedAt&apiKey=fcca02606cb2467c8c1ec72c5f168d1e"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.articles);
      });
  }, []);
  return (
    <Layout>
      {loading ? (
        "loading"
      ) : (
        <>
          <br />
          <div className="flex items-center justify-between w-[1200px] m-auto">
            <li className="list-none text-2xl hover:text-blue-400 flex items-center">
              {router.query.category[0]} <IoIosArrowForward />{" "}
              {router.query.category[1]}
            </li>
          </div>
          <br />
          <br />
          <CategoryTop news={data?.slice(0, 9)} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <MostRead news={data?.slice(11, 20)} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <NewsList news={data?.slice(0, 20)} />{" "}
        </>
      )}
    </Layout>
  );
};

export default SubCategory;
