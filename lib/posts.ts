import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export type Markdown = string

export interface BlogPost {
  title?: string
  excerpt?: string
  date?: string
  content?: Markdown
  slug?: string
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}
export function getPostBySlug(slug, fields = []): BlogPost {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }
    if (field === 'content') {
      post[field] = content
    }

    if (data[field]) {
      post[field] = data[field]
    }
  })

  return post
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
