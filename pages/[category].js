import MostRead from "@/components/categoryMostRead";
import style from "../styles/category.module.css";
import CategoryTop from "@/components/categoryTop";
import Layout from "@/components/shared/layout/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NewsList from "@/components/newsList";
import Link from "next/link";

const Category = () => {
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
            <li className="list-none text-2xl hover:text-blue-400">
              {router.query.category}
            </li>
            <ul className="flex items-center justify-center">
              <Link href={`/${router.query.category}/ঢাকা`}>
                <li className="mx-5 hover:text-blue-400 cursor-pointer">
                  ঢাকা
                </li>
              </Link>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">
                রাজশাহী
              </li>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">
                চট্টগ্রাম
              </li>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">খুলনা</li>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">
                বরিশাল
              </li>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">সিলেট</li>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">রংপুর</li>
              <li className="mx-5 hover:text-blue-400 cursor-pointer">
                {" "}
                ময়মনসিংহ
              </li>
            </ul>{" "}
          </div>
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

export default Category;
