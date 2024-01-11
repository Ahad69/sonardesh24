import MostRead from "@/components/categoryMostRead";
import CategoryTop from "@/components/categoryTop";
import Layout from "@/components/shared/layout/layout";
import { useRouter } from "next/router";
import NewsList from "@/components/newsList";
import Link from "next/link";
import categories from "./../public/categories.json";
import Head from "next/head";
import { Pagination } from "antd";

const Category = ({ data, meta }) => {
  const router = useRouter();
  const cat = router.query.category;
  const category = categories.find((a) => a.name == cat);
  const subCategory = categories.filter(
    (a) => a?.parent?.$oid == category?._id?.$oid
  );

  const onChange = (page) => {
    router.push(`/${cat}?page=${page}`);
  };

  return (
    <Layout>
      <Head>
        <title>{data ? router.query.category : "Loading..."}</title>
      </Head>
      <>
        <br />
        <div className="flex items-center justify-between flex-col sm:flex-row sm:w-[1200px] m-auto">
          <li className="list-none text-2xl hover:text-blue-400">
            {router.query.category}
          </li>

          <ul className="flex items-center justify-center">
            {subCategory?.map((a) => (
              <Link href={`/${router.query.category}/${a?.name}`}>
                <li className="sm:mx-5 mx-1 text-sm sm:text-base hover:text-blue-400 cursor-pointer">
                  {a?.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {data?.length == 0 ? (
          <p className="text-5xl w-full h-96 flex justify-center items-center">
            {" "}
            No News Published
          </p>
        ) : (
          <>
            {" "}
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
            <NewsList news={data?.slice(0, 20)} />
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

export default Category;

export const getServerSideProps = async (context) => {
  const { params, query } = context;

  const res = await fetch(
    `https://sonardesh24-backend.vercel.app/api/news/category?category=${query.category}&page=${query?.page}`
  );
  const result = await res.json();

  return {
    props: {
      data: result.data,
      meta: result.meta,
    },
  };
};
