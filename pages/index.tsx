import Head from 'next/head';
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CapturedContext</title>
        <meta name="description" content="Interesting articles about Technology featuring React, GraphQL and DevOps." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          <span className={styles.headline}>CapturedContext</span>
          <span className={styles.domain}>.dev</span>
        </h1>
      </main>
    </div>
  )
}
