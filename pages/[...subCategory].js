"use client";
import MostRead from "@/components/categoryMostRead";
import CategoryTop from "@/components/categoryTop";
import NewsList from "@/components/newsList";
import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SubCategory = ({ data }) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>
          {data
            ? router.query.subCategory?.[0] +
              " - " +
              router.query.subCategory?.[1]
            : "Loading..."}
        </title>
      </Head>
      <>
        <br />
        <div className="flex items-center justify-between w-[1200px] m-auto">
          <li className="list-none text-2xl hover:text-blue-400 flex items-center">
            {router.query.subCategory?.[0]}
            <IoIosArrowForward />
            {router.query.subCategory?.[1]}
          </li>
        </div>

        {data?.length == 0 ? (
          <p className="text-5xl w-full h-96 flex justify-center items-center">
            {" "}
            No News Published
          </p>
        ) : (
          <>
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
      </>
    </Layout>
  );
};

export default SubCategory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://sonardesh24-backend.vercel.app/api/v1/news/?subCategory=${params.subCategory?.[1]}`
  );
  const result = await res.json();

  return {
    props: {
      data: result.data,
    },
  };
};
