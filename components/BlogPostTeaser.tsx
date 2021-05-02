import React, { FC } from 'react'
import { BlogPost } from '../lib/posts'
import styles from '../styles/components/BlogPostTeaser.module.css'
export const BlogPostTeaser: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className={styles.teaser}>
      <header>
        <h3>{post.title}</h3>
        <small>{post.date} • ☕️ 5 min read</small>
      </header>
      <p>{post.excerpt}</p>
    </article>
  )
}
