import React, { FC } from 'react'
import { Logo } from '../components/Logo'
import { Page } from '../components/Page'
import markdownToHtml from '../lib/markdownToHtml'
import { BlogPost, getAllPosts, getPostBySlug } from '../lib/posts'
export const Post: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Page>
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
