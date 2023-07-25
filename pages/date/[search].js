import NewsList from "@/components/newsList";
import Layout from "@/components/shared/layout/layout";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = ({ result }) => {
  const { data, meta } = result;
  const router = useRouter();

  const onChange = (page) => {
    console.log(page);
  };

  return (
    <Layout>
      <div className="w-[1200px] m-auto">
        <h1 className="my-5 text-2xl">
          {" "}
          ফলাফল দেখানো হচ্ছে "<b>{router?.query.search}</b>" এর
        </h1>
        {data.length == 0 ? (
          <p className="text-5xl w-full h-96 flex justify-center items-center">
            {" "}
            No News Published
          </p>
        ) : (
          <>
            <NewsList news={data?.slice(0, 20)} />
            <br />
            <Pagination
              defaultCurrent={meta.page}
              pageSize={meta.limit}
              total={meta.total}
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
  const { params } = context;

  const res = await fetch(
    `http://localhost:5000/api/v1/news/date?createdAt=${params.search}&limit=10`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
};
