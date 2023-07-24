"use client";
import MostRead from "@/components/categoryMostRead";
import CategoryTop from "@/components/categoryTop";
import NewsList from "@/components/newsList";
import Layout from "@/components/shared/layout/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const SubCategory = ({ data }) => {
  const router = useRouter();
  return (
    <Layout>
      <>
        <br />
        <div className="flex items-center justify-between w-[1200px] m-auto">
          <li className="list-none text-2xl hover:text-blue-400 flex items-center">
            {router.query.subCategory?.[0]}
            <IoIosArrowForward />
            {router.query.subCategory?.[1]}
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
    </Layout>
  );
};

export default SubCategory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/news/?subCategory=${params.subCategory?.[1]}`
  );
  const result = await res.json();

  return {
    props: {
      data: result.data,
    },
  };
};
