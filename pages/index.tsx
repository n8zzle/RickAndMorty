import Head from "next/head";
import { useEffect, useState } from "react";
import Characters from "../components/Characters";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Locations from "../components/Locations";

const defaultEndpoint = "https://rickandmortyapi.com/api/character";
export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default function Home({ data }) {
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint,
  });
  const { current } = page;

  useEffect(() => {
    if (current === defaultEndpoint) return;

    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info,
      });

      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }

      updateResults((prev) => {
        return [...prev, ...nextData.results];
      });
    }

    request();
  }, [current]);

  function handleToLoadMore() {
    updatePage((prev) => {
      return {
        ...prev,
        current: page?.next,
      };
    });
  }
  console.log(data);
  return (
    <div className="h-screen  snap-y snap-mandatory overflow-x-hidden z-0">
      <Head>
        <title>Rick And Morty</title>
      </Head>

      <Header />

      <section id="main" className="snap-start">
        <Hero />
      </section>
      <section id="characters" className="snap-center">
        <Characters results={results} handleToLoadMore={handleToLoadMore} />
      </section>
    </div>
  );
}
