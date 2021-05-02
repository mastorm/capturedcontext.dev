import React, { FC } from 'react'
import { BlogPost } from '../lib/posts'
import { BlogPostTeaser } from './BlogPostTeaser'

export const BlogPosts: FC<{ posts: BlogPost[] }> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <BlogPostTeaser post={post} />
      ))}
    </>
  )
}
