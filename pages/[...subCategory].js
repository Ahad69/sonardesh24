"use client";
import MostRead from "@/components/categoryMostRead";
import CategoryTop from "@/components/categoryTop";
import NewsList from "@/components/newsList";
import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import categories from "./../public/categories.json";
import Link from "next/link";
import { Pagination } from "antd";
import cities from "./../public/cities.json";

const SubCategory = ({ data, meta }) => {
  const router = useRouter();
  const cat = router.query.subCategory?.[0];

  const subcat = router.query.subCategory?.[1];

  const category = categories.find((a) => a.name == cat);

  const subCategory = categories.filter(
    (a) => a?.parent?.$oid == category?._id?.$oid
  );

  const supersubCategory = cities.filter((a) => a.division == subcat);

  const onChange = (page) => {
    router.push(
      `/${router.query.subCategory?.[0]}/${router.query.subCategory?.[1]}?page=${page}`
    );
  };



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
        <div className="sm:w-[1200px] m-auto flex flex-col sm:flex-row justify-between items-start">
          <li className="list-none text-2xl hover:text-blue-400 flex items-center">
            {router.query.subCategory?.[0]}
            <IoIosArrowForward />
            {router.query.subCategory?.[1]}
          </li>
          <ul className="flex items-center sm:justify-end justify-between sm:w-[1000px] flex-wrap">
            {subCategory?.map((a) => (
              <Link href={`/${router.query.subCategory?.[0]}/${a?.name}`}>
                <li className="sm:mx-5 mx-1 text-sm sm:text-base hover:text-blue-400 cursor-pointer">
                  {a?.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <hr className="my-3" />
        <ul className="flex items-center justify-center sm:w-[1200px] m-auto flex-wrap">
          {supersubCategory?.map((a) => (
            <Link
              href={`/${router.query.subCategory?.[0]}/${router.query.subCategory?.[1]}?city=${a.name}`}
            >
              <li className="sm:mx-5 mx-1 text-sm sm:text-base hover:text-blue-400 cursor-pointer">
                {a?.name}
              </li>
            </Link>
          ))}
        </ul>

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
            <NewsList news={data?.slice(0, 20)} /> <br />
            <br />
            <Pagination
              className="w-6/12 m-auto  flex justify-center"
              defaultCurrent={1}
              pageSize={10}
              total={meta?.total}
              onChange={onChange}
            />
          </>
        )}
      </>
    </Layout>
  );
};

export default SubCategory;

export const getServerSideProps = async (context) => {
  const { params, query } = context;

  const res = await fetch(
    `https://sonardesh24-backend.vercel.app/api/news/subCategory?subCategory=${
      params.subCategory?.[1]
    }&page=${query?.page ?? 1}&city=${query.city}`
  );
  const result = await res.json();
  return {
    props: {
      data: result.data,
      meta: result.meta,
    },
  };
};
