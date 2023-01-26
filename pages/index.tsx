import React, { useContext } from "react";

import Head from "next/head";
import Search from "../components/Search";
import CTA from "../components/CTA";
import Logo from "../components/Logo";
import Content from "../components/Content";
import Conversation from "../components/Conversation";
import { DialogContext } from "../providers/DialogProvider";
import SelectMenu from "../components/SelectMenu";
import getIndexes from "../hooks/getIndexes";
import { InferGetStaticPropsType } from "next";
import Footer from "../components/Footer";

export default function Home({
  indexes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { conversation } = useContext(DialogContext);

  return (
    <div className="">
      <Head>
        <title>Housewives AMA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <main className="flex flex-col items-center h-screen">
        <div
          style={{ maxHeight: "calc(100vh-20px)" }}
          className="w-full md:w-[50rem] lg:w-[65rem] flex flex-col flex-1 gap-7 px-4 md:px-20 mt-4"
        >
          <Logo />
          <CTA />
          {conversation && conversation.length > 0 ? (
            <Conversation />
          ) : (
            <Content />
          )}
        </div>
        <footer className="sticky flex flex-col gap-10 justify-center items-center w-full md:w-[50rem] lg:w-[65rem] px-4 md:px-20">
          <Search />
          {/* <SelectMenu indexes={indexes} /> */}
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const indexes = await getIndexes();
  return {
    props: {
      indexes,
    },
  };
}
