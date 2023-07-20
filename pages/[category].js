import style from "../styles/category.module.css";
import CategoryTop from "@/components/categoryTop";
import Layout from "@/components/shared/layout/layout";
import { useEffect, useState } from "react";

const Category = () => {
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
    </Layout>
  );
};

export default Category;
