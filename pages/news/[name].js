import Layout from "@/components/shared/layout/layout";
import React from "react";
import style from "../../styles/category.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Lines from "@/components/news/categoryUi/lineCat/lines";
import { ImEye } from "react-icons/im";
import { GrFacebook, GrPinterest, GrTwitter } from "react-icons/gr";
import { BsLinkedin, BsReddit } from "react-icons/bs";
import { FaDigg } from "react-icons/fa";
import Dynamicdate from "@/components/banglaDate/dynamicdate";
import Image from "next/image";
import Head from "next/head";

const Details = ({ data }) => {
  const newsPageURL = `https://sonardesh24.com/news/${data.permalink}`;

  const shareOnFacebook = () => {
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      newsPageURL
    )}`;
    window.open(facebookShareURL, "_blank");
  };
  const shareOnLinkedIn = () => {
    const linkedinShareURL =
      `https://www.linkedin.com/shareArticle?mini=true` +
      `&url=${encodeURIComponent(newsPageURL)}` +
      `&title=${encodeURIComponent(data?.title)}`;
    window.open(linkedinShareURL, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterShareURL = `https://twitter.com/share?text=${encodeURIComponent(
      data?.title
    )}&url=${encodeURIComponent(newsPageURL)}`;
    window.open(twitterShareURL, "_blank");
  };

  return (
    <Layout>
      <Head>
        <title>{data.title ? data.title : "Loading..."}</title>
      </Head>
      <div className="flex items-center justify-between w-[1200px] m-auto mt-4">
        <li className="list-none text-lg hover:text-blue-400 flex items-center">
          {data.category} <IoIosArrowForward className="mx-2" />{" "}
          {data.subCategory}
        </li>
      </div>
      <hr className="my-2" />
      <div className={style.detailsContainer}>
        <div className="w-[750px]">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <br />
          <div className="flex items-end">
            <img className="w-[50px] mr-5" src="/noimage.gif" />
            <div>
              <h1 className="text-md">সোনারদেশ ২৪ ডেস্ক</h1>
              <hr />
              <div className="flex items-center text-sm">
                আপডেট করা হয়েছে - <Dynamicdate date={data.createdAt} /> /{" "}
                <ImEye className="mx-2" /> {data?.visited} বার পড়া হয়েছে
              </div>
            </div>
          </div>
          <br />
          <Image
            width={750}
            height={450}
            className="w-full h-[450px]"
            src={data?.image}
            alt="a"
          />
          <br />
          <h1 className="text-xl font-bold"> সোনারদেশ২৪: ডেস্কঃ </h1>
          <br />
          <div>{data?.description}</div>
          <hr className="my-5" />
          <div className="my-10">
            <h1 className="text-2xl font-bold text-center">
              সংবাদটি শেয়ার করুন
            </h1>
            <div className=" flex justify-around items-center w-6/12 m-auto mt-4">
              <GrFacebook
                onClick={() => shareOnFacebook()}
                className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border"
              />

              <GrTwitter
                onClick={() => shareOnTwitter()}
                className="text-3xl  cursor-pointer bg-cyan-400 text-white border hover:text-cyan-400 hover:bg-white p-1 "
              />
              <BsLinkedin
                onClick={() => shareOnLinkedIn()}
                className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border"
              />

              <BsReddit className="text-3xl text-white bg-red-500 hover:text-red-500 hover:bg-white cursor-pointer border rounded-full" />

              <FaDigg className="text-3xl text-white bg-blue-600 hover:text-blue-500 hover:bg-white cursor-pointer border px-1" />

              <GrPinterest className="text-3xl text-white bg-red-500 hover:text-red-500 hover:bg-white cursor-pointer border rounded-full" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[380px] h-[600px] mt-10">
            <img
              className="h-full w-full"
              src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
            />
          </div>
          {/* <Lines news={data} />
          <Lines news={data} />
          <Lines news={data} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Details;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://sonardesh24-backend.vercel.app/api/v1/news/permalink?permalink=${params.name}`
  );
  const result = await res.json();

  return {
    props: {
      data: result.data,
    },
  };
};
