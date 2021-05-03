import hljs from 'highlight.js'
import csharp from 'highlight.js/lib/languages/csharp'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/atom-one-dark.css'
import Head from 'next/head'
import React, { FC, useEffect } from 'react'
import { Logo } from '../components/Logo'
import { Page } from '../components/Page'
import markdownToHtml from '../lib/markdownToHtml'
import { BlogPost, getAllPosts, getPostBySlug } from '../lib/posts'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('csharp', csharp)
hljs.registerLanguage('json', json)

export const Post: FC<{ post: BlogPost }> = ({ post }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  return (
    <Page>
      <Head>
        <title>{post.title} - CapturedContext</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>
        <Logo />
      </h3>
      <main dangerouslySetInnerHTML={{ __html: post.content }}></main>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])
  const content = await markdownToHtml(post.content || '')
  //   const mdxSource = await renderToString(content)
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
export default Post
