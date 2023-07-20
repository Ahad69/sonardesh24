import MostRead from "@/components/categoryMostRead";
import style from "../styles/category.module.css";
import CategoryTop from "@/components/categoryTop";
import Layout from "@/components/shared/layout/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NewsList from "@/components/newsList";

const Category = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from&sortBy=publishedAt&apiKey=fcca02606cb2467c8c1ec72c5f168d1e"
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Category;
