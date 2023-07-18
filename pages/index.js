import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/shared/layout/layout";
import HomePageTop from "@/components/homePageTop";
import { useEffect, useState } from "react";
import HomeSecondSection from "@/components/homeSecond";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-06-18&sortBy=publishedAt&apiKey=fcca02606cb2467c8c1ec72c5f168d1e"
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  }, []);

  return (
    <>
      <Layout>
        <div className="mt-5">
          <HomePageTop news={data.slice(0, 6)} />
          <br />
          <br />
          <br />
          <HomeSecondSection news={data.slice(7, 13)} />
        </div>
      </Layout>
    </>
  );
}
