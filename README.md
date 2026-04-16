# coding-ferret

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Blog Posts

Blog posts are Markdown files stored in `content/blog/`. No code changes are needed to add a new post.

### Adding a post

1. Create a `.md` file in `content/blog/` — the filename becomes the URL slug.
   - e.g. `content/blog/my-new-post.md` → `/blog/my-new-post`

2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2026-04-20"
summary: "One-line summary shown on the listing page."
tags: ["Azure", ".NET"]
---

Your markdown content here...
```

Posts are sorted newest-first by `date`. The listing page falls back to a "Coming Soon" state if the folder is empty.

**Dependencies:** `gray-matter` (frontmatter parsing), `remark` + `remark-html` (Markdown rendering), `@tailwindcss/typography` (prose styles).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
