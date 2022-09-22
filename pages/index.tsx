import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-x-hidden z-0">
      <Head>
        <title>Rick And Morty</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
}
