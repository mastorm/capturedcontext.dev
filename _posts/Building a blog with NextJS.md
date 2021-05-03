---
title: Building a personal blog with NextJS
excerpt: How i built my own Blog with NextJS and why I picked next
date: '2021-05-03'
---

# Building a personal blog with NextJS

A personal blog was a pet project that I wanted to do for a very long time now. And not only did I want a blog, no, but I also wanted it fast. Fast as in quickly built **and** performant. It should also scale well with future requirements so that I don't have to start from scratch the second I want to add something more complex. And here is how I did it.

## Choosing a framework

Since I know my way around React, this was an obvious pick. It is not necessarily my favorite framework, but I knew I could put something into production fast. The only choice I had left was which framework to use. The obvious candidates were NextJS and Gatsby. Considering my pick is quite obvious from the title, let me outline what convinced me to pick NextJS over Gatsby.
Gatsby looked like a great candidate, but the learning curve was a lot steeper compared to NextJS. I also didn't feel like fighting with the restriction of static-only sites later. NextJS has serverless functions out of the box, which I plan to adopt for a newsletter later. But the most convincing thing about NextJS was its ecosystem. Vercel's hosting platform is excellent and took so much tedious work off my shoulder that using it was a no-brainer.

## Implementation

The implementation itself was straightforward. It boils down to two pages and five components for now. One page, [`index.tsx`](https://github.com/mastorm/Blog/blob/main/pages/index.tsx), handles listing all the available posts. The [other page](https://github.com/mastorm/Blog/blob/main/pages/%5Bslug%5D.tsx) is the one you are looking at right now. It is responsible for rendering the markdown to HTML and displaying it to you.
I decided to go with markdown to write my posts. I copied some code from the excellent NextJS docs and adjusted it to my needs. Posts are then read from the `_posts` folder and translated to HTML at build-time. You can take a look at the logic used [here](https://github.com/mastorm/Blog/blob/main/lib/posts.ts). It simply reads the files and extracts some metadata using the excellent [gray-matter](https://www.npmjs.com/package/gray-matter) package.

## Conclusion

Building this blog has been a pleasant experience for me. NextJS has a lot to offer and it wont be the last time i use it. If you also want your own blog, feel free to fork my code. Its free to use for everyone! :)
