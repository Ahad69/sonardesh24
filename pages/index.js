import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/shared/layout/layout";
import HomePageTop from "@/components/homePageTop";
import { useEffect, useState } from "react";
import HomeSecondSection from "@/components/homeSecond";
import HomeNationalSection from "@/components/homeNational";
import InternationalSection from "@/components/international";
import CommonCategorySection from "@/components/commoncategory";
import Education from "@/components/education";
import Sports from "@/components/sports";
import LineCategory from "@/components/commoncategory/lineCategory";
import Entertainment from "@/components/entertainment";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=&from&sortBy=publishedAt&apiKey=fcca02606cb2467c8c1ec72c5f168d1e"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Layout>
        {loading ? (
          "loading"
        ) : (
          <div className="mt-5">
            <HomePageTop news={data?.slice(0, 6)} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <HomeSecondSection news={data?.slice(7, 13)} />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <HomeNationalSection news={data?.slice(13, 25)} />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <InternationalSection news={data?.slice(25, 35)} />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <CommonCategorySection news={data?.slice(36, 57)} />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Sports news={data?.slice(65, 77)} />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Education news={data?.slice(58, 64)} />

            <br />
            <br />
            <hr />
            <br />
            <br />
            <LineCategory news={data?.slice(77, 90)} />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Entertainment news={data?.slice(90, 97)} />
            <br />
            <br />

            <br />
            <br />
          </div>
        )}
      </Layout>
    </>
  );
}
