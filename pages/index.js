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

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
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
          <HomeNationalSection news={data?.slice(9, 21)} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <InternationalSection news={data?.slice(10, 21)} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <CommonCategorySection news={data?.slice(0, 21)} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Sports news={data?.slice(0, 15)} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Education news={data?.slice(15, 21)} />

          <br />
          <br />
          <hr />
          <br />
          <br />
          <LineCategory news={data?.slice(0, 13)} />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Entertainment news={data?.slice(13, 21)} />
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
  const res = await fetch(`http://localhost:5000/api/v1/news/`);
  const result = await res.json();

  return {
    props: {
      data: result.data,
    },
  };
};
