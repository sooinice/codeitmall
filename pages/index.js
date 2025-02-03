import { useEffect, useState } from "react";

import Head from "next/head";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";

//정적 생성을 했을 때 prop으로 내려줄 값을 만드는 함수
export async function getStaticProps() {
  const res = await axios.get("/products");
  const products = res.data.results;
  return {
    props: {
      products, //props
    },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
