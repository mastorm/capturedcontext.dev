import Head from 'next/head';
import React from "react";
import { Avatar } from '../components/Avatar';
import { default as classes, default as styles } from '../styles/Home.module.css';

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
        <section>
          <div className={styles.introduction}>
            <div>
              <Avatar />
            </div>
            <div className={classes.aboutMe}>
              <h2>Mathias Storm</h2>
              <p>
                Full-Stack Software engineer from Germany, writing about React, C# and GraphQL and DevOps.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
