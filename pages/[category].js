import MostRead from "@/components/categoryMostRead";
import CategoryTop from "@/components/categoryTop";
import Layout from "@/components/shared/layout/layout";
import { useRouter } from "next/router";
import NewsList from "@/components/newsList";
import Link from "next/link";
import categories from "./../public/categories.json";

const Category = ({ data }) => {
  const router = useRouter();
  const cat = router.query.category;

  const category = categories.find((a) => a.name == cat);

  const subCategory = categories.filter(
    (a) => a?.parent?.$oid == category?._id?.$oid
  );

  console.log(subCategory);

  return (
    <Layout>
      <>
        <br />
        <div className="flex items-center justify-between w-[1200px] m-auto">
          <li className="list-none text-2xl hover:text-blue-400">
            {router.query.category}
          </li>

          <ul className="flex items-center justify-center">
            {subCategory?.map((a) => (
              <Link href={`/${router.query.category}/${a?.name}`}>
                <li className="mx-5 hover:text-blue-400 cursor-pointer">
                  {a?.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
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

export default Category;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/news/?category=${params.category}`
  );
  const result = await res.json();

  return {
    props: {
      data: result.data,
    },
  };
};
