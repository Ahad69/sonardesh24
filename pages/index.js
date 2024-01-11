import { Inter } from "next/font/google";
import Layout from "@/components/shared/layout/layout";
import HomePageTop from "@/components/homePageTop";
import HomeSecondSection from "@/components/homeSecond";
import HomeNationalSection from "@/components/homeNational";
import InternationalSection from "@/components/international";
import CommonCategorySection from "@/components/commoncategory";
import Education from "@/components/education";
import Sports from "@/components/sports";
import LineCategory from "@/components/commoncategory/lineCategory";
import Entertainment from "@/components/entertainment";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, latest }) {
  const games = data?.filter((a) => a?.category == "খেলাধুলা");
  const national = data?.filter((a) => a?.category == "জাতীয়");
  const international = data?.filter((a) => a?.category == "আন্তর্জাতিক");
  const politics = data?.filter((a) => a?.category == "রাজনীতি");
  const economics = data?.filter((a) => a?.category == "অর্থনীতি");
  const laws = data?.filter((a) => a?.category == "আইন আদালত");
  const info = data?.filter((a) => a?.category == "তথ্য প্রযুক্তি");
  const education = data?.filter((a) => a?.category == "শিক্ষা");
  const lifestyle = data?.filter((a) => a?.category == "লাইফস্টাইল");
  const jobs = data?.filter((a) => a?.category == "চাকরি");
  const rashi = data?.filter((a) => a?.category == "রাশিফল");
  const entertainment = data?.filter((a) => a?.category == "বিনোদন");

  console.log(data);

  return (
    <>
      <Layout>
        <Head>
          <title>সোনার দেশ</title>
        </Head>
        <div className="mt-5">
          <HomePageTop news={latest?.slice(0, 6)} />
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          <br />
          <br />
          <HomeSecondSection news={latest?.slice(7, 13)} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <HomeNationalSection news={national} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <InternationalSection news={international} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <CommonCategorySection
            politics={politics}
            economics={economics}
            laws={laws}
            info={info}
          />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Sports news={games} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Education news={education} />

          <br />
          <br />
          <hr />
          <br />
          <br />
          <LineCategory lifestyle={lifestyle} jobs={jobs} rashi={rashi} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Entertainment news={entertainment} />
          <br />
          <br />

          <br />
          <br />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://sonardesh24-backend.vercel.app/api/news/all`
  );
  const result = await res.json();

  return {
    props: {
      data: result.data,
      latest: result.latest,
    },
  };
};
