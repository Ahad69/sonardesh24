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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from&sortBy=publishedAt&apiKey=fcca02606cb2467c8c1ec72c5f168d1e"
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  }, []);

  console.log(data);

  return (
    <>
      <Layout>
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
          <Education news={data?.slice(58, 64)} />

          <br />
          <br />
          <hr />
          <br />
          <br />
        </div>
      </Layout>
    </>
  );
}
