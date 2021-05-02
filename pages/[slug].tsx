import React, { FC } from 'react'
import { BlogPost, getAllPosts, getPostBySlug } from '../lib/posts'

export const Post: FC<{ post: BlogPost }> = ({ post }) => {
  return <>{post.title}</>
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])
  const content = post.content || '' //await markdownToHtml(post.content || '')

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
