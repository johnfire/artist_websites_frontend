import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import React, { useState } from "react";

import TitleComponent from "@/components/TitleComponent";
import UserLoginButton from "@/components/UserLoginButton";
import CreateAccountButton from "@/components/CreateAccountButton";
import LanguageSelector from "@/components/LangaugeSelector";

import { GetStaticPropsContext } from "next";
import { useTranslations, useFormatter } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  console.log("Home16:");
  const t = useTranslations("front_page");
  const format = useFormatter();

  return (
    <>
      <Layout>
        <div>
          <Head>
            <title>Euro Artist websites </title>
            <meta
              name="description"
              content="website for generating custom art websites"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <TitleComponent />
            <Image src={"/thirteen.svg"} alt="13" width={200} height={200} />
            <Link href="/About">about us</Link>
          </main>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}

export default Home;
