import NewsList from "@/components/newsList";
import Layout from "@/components/shared/layout/layout";
import { Pagination } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = ({ result }) => {
  const { data, meta } = result;
  const router = useRouter();

  const onChange = (page) => {
    router.push(`/date/${router.query.date}?page=${page}`);
  };

  return (
    <Layout>
      <Head>
        <title>Results for {result ? router.query.date : "Loading..."}</title>
      </Head>
      <div className="sm:w-[1200px] m-auto">
        <h1 className="my-5 text-2xl p-2">
          {" "}
          ফলাফল দেখানো হচ্ছে "<b>{router?.query.date}</b>" এর
        </h1>
        {data?.length == 0 ? (
          <p className="text-5xl w-full h-96 flex justify-center items-center">
            {" "}
            No News Published
          </p>
        ) : (
          <>
            <NewsList news={data?.slice(0, 20)} />
            <br />
            <Pagination
              className="w-6/12 m-auto  flex justify-center"
              defaultCurrent={meta?.page}
              pageSize={10}
              total={meta?.total}
              onChange={onChange}
            />{" "}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const { query } = context;

  const res = await fetch(
    `https://sonardesh24-backend.vercel.app/api/news/date?page=${query.page}&createdAt=${query.date}`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
};
