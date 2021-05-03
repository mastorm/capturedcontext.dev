import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { Avatar } from '../components/Avatar'
import { BlogPosts } from '../components/BlogPosts'
import { Logo } from '../components/Logo'
import { Page } from '../components/Page'
import { BlogPost, getAllPosts } from '../lib/posts'
import { default as styles } from '../styles/Home.module.css'

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <Page>
      <Head>
        <title>CapturedContext</title>
        <meta
          name="description"
          content="Interesting articles about Technology featuring React, GraphQL and DevOps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>
          <Logo />
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
              Full-Stack Software engineer from Germany, writing about React, C#
              and GraphQL and DevOps.
            </p>
          </div>
        </div>
      </section>
      <main>
        <BlogPosts posts={posts} />
      </main>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

  return Promise.resolve({
    props: { posts },
  })
}
