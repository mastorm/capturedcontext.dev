import Head from 'next/head'
import React from 'react'
import { Avatar } from '../components/Avatar'
import { default as styles } from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>CapturedContext</title>
        <meta
          name="description"
          content="Interesting articles about Technology featuring React, GraphQL and DevOps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>
            <span className={styles.headline}>CapturedContext</span>
            <span className={styles.domain}>.dev</span>
          </h1>
        </header>
        <section>
          <div className={styles.split}>
            <div>
              <Avatar />
            </div>
            <div>
              <h2>Mathias Storm</h2>
              <p>
                Full-Stack Software engineer from Germany, writing about React,
                C# and GraphQL and DevOps.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
