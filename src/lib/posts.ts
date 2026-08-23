import { marked } from 'marked'

export type Post = {
  slug: string
  title: string
  date: string
  /** Pretty, human-readable date. */
  dateLabel: string
  summary: string
  tags: string[]
  draft: boolean
  body: string
  readingMinutes: number
}

/**
 * Every `.md` file in src/posts becomes a post. Filename is the URL slug —
 * `why-purpose-apps.md` is served at /blog/why-purpose-apps.
 */
const files = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

function parseFrontmatter(raw: string) {
  const match = raw.match(FRONTMATTER)
  if (!match) return { meta: {} as Record<string, string>, body: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const at = line.indexOf(':')
    if (at === -1) continue
    const key = line.slice(0, at).trim()
    const value = line
      .slice(at + 1)
      .trim()
      .replace(/^["']|["']$/g, '')
    if (key) meta[key] = value
  }

  return { meta, body: raw.slice(match[0].length) }
}

function formatDate(iso: string) {
  const d = new Date(iso + 'T12:00:00')
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

marked.setOptions({ gfm: true, breaks: false })

function build(): Post[] {
  return Object.entries(files)
    .map(([path, raw]) => {
      const slug = path.split('/').pop()!.replace(/\.md$/, '')
      const { meta, body } = parseFrontmatter(raw)
      const words = body.trim().split(/\s+/).length

      return {
        slug,
        title: meta.title || slug,
        date: meta.date || '',
        dateLabel: meta.date ? formatDate(meta.date) : '',
        summary: meta.summary || '',
        tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
        draft: meta.draft === 'true',
        // Posts are authored only by the site owner, so the markdown is trusted.
        body: marked.parse(body) as string,
        readingMinutes: Math.max(1, Math.round(words / 220)),
      }
    })
    .filter((p) => !p.draft || import.meta.env.DEV)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const posts: Post[] = build()

export function getPost(slug?: string) {
  return posts.find((p) => p.slug === slug)
}
