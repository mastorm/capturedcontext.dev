import React, { FC } from 'react'
import { BlogPost } from '../lib/posts'

export const BlogPostTeaser: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article>
      <header>
        <h3>{post.title}</h3>
        <small>{post.date} • ☕️ 5 min read</small>
      </header>
      <p>{post.excerpt}</p>
    </article>
  )
}
