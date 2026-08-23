# Purpose Apps — purpose-apps.com

Marketing + mission site for Purpose Apps. React 19 · TypeScript · Vite · React Router.
Hosted on Azure Static Web Apps (Free tier).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run deploy   # build and push live (needs `az login`)
```

## Where the content lives

Almost every word on the site is in **`src/content.ts`** — edit there, not in the
components. It holds the mission copy, the project entries, and the whole About /
resume page.

Anything marked `TODO` in that file is a placeholder that still needs your real
details:

| What | Where |
| --- | --- |
| LinkedIn URL | `contact.linkedin` |
| Your city / region | `profile.location` |
| Employment history beyond Purpose Apps | `experience[]` |
| Education | `education[]` |

## Writing a blog post

Drop a markdown file into **`src/posts/`**. The filename becomes the URL:
`src/posts/my-post.md` is served at `/blog/my-post`.

```markdown
---
title: The title of the post
date: 2026-09-01
summary: One or two sentences shown in the blog list and previews.
tags: mission, provoco
draft: false
---

Your post body, in normal markdown. Headings, **bold**, lists, [links](https://provoco.net),
quotes and code blocks are all styled.
```

Frontmatter notes:

- `date` must be `YYYY-MM-DD` — posts are sorted newest first by this field.
- `tags` is optional and comma-separated.
- `draft: true` hides the post from the live site but keeps it visible while running
  `npm run dev`, so you can write it in place.
- Reading time is calculated automatically.

Then `npm run deploy`. Add the post's URL to `public/sitemap.xml` when you publish it.

## Structure

```
src/
  content.ts          all site copy (mission, projects, resume)
  styles.css          the whole design system — tokens, components, pages
  posts/*.md          blog posts
  lib/
    posts.ts          loads + parses the markdown posts
    theme.ts          light/dark toggle, persisted to localStorage
    useReveal.ts      scroll-reveal animation
  components/         Header, Footer, ProjectCard, Icons
  pages/              Home, About, Blog, BlogPost, NotFound
public/
  staticwebapp.config.json   SPA fallback + security headers for Azure
  sitemap.xml, robots.txt, favicon.svg
```

## Theming

Colours, spacing and type are CSS custom properties at the top of `src/styles.css`.
Light is the `:root` default; dark overrides live under `:root[data-theme='dark']`.
The theme is applied by a small inline script in `index.html` before first paint so
there is no flash of the wrong palette.

## Hosting

| | |
| --- | --- |
| Azure resource group | `purpose-apps` (East US 2) |
| Static Web App | `purpose-apps` — Free tier, $0/month |
| Default hostname | `proud-cliff-0b30da30f.7.azurestaticapps.net` |
| Custom domain | `purpose-apps.com` (DNS on Cloudflare) |

`npm run deploy` pulls the deployment token from Azure via the CLI, so there is no
secret stored in this repo.
