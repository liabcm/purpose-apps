/**
 * Single source of truth for every word on the site (except blog posts,
 * which live as markdown in src/posts/).
 *
 * Edit here, not in the components. Entries marked `TODO` are placeholders
 * that need your real details before the About page is fit to send anywhere.
 */

export const site = {
  name: 'Purpose Apps',
  domain: 'purpose-apps.com',
  tagline: 'Building apps that give people purpose.',
  intro:
    'AI is going to take a lot of work off the table. Purpose Apps exists to put something back — products that pay people, or give them something worth dedicating themselves to.',
} as const

export const contact = {
  email: 'liamkruger62@gmail.com',
  github: 'https://github.com/liabcm',
  // TODO: replace with your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/in/liam-kruger',
} as const

/* ------------------------------------------------------------------ */
/* Mission                                                             */
/* ------------------------------------------------------------------ */

export const mission = {
  eyebrow: 'The premise',
  heading: 'Work is going to get scarcer. That is the problem worth building against.',
  body: [
    'The next stretch of automation will not take every job, but it will take enough of them that "find another one" stops being a real answer. The gap that opens up is not only financial. People lose the income, and they lose the thing they organised their week around.',
    'Purpose Apps is a bet that the same technology doing the taking can be pointed the other way — at products that put money back in people’s hands, or give them somewhere to put themselves when paid work alone is no longer enough.',
  ],
  pillars: [
    {
      n: '01',
      title: 'Pay people',
      body: 'Build products where real money reaches the people who make them worth using — not just the platform that hosts them.',
    },
    {
      n: '02',
      title: 'Give them something to dedicate themselves to',
      body: 'Structure, progression and a reason to show up. Not another feed to scroll — something you can be committed to and get better at.',
    },
    {
      n: '03',
      title: 'Build it properly',
      body: 'Production-grade software, not demos. If people are going to rely on it, it has to be worth relying on.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string
  name: string
  url: string
  href: string
  year: string
  role: string
  blurb: string
  description: string
  ambition?: string
  highlights: string[]
  stack: string[]
  /** Two brand colours used to tint the project card. */
  tint: [string, string]
}

/** The project the mission actually runs through. */
export const flagship: Project = {
  id: 'provoco',
  name: 'Provoco',
  url: 'provoco.net',
  href: 'https://provoco.net',
  year: '2025 —',
  role: 'Founder · Full-stack',
  blurb: 'Your game, your crew. Game on.',
  description:
    'A social platform for pickup sport. Provoco turns a scattered group chat into an actual season — organise games at real venues, build a crew, run leagues and brackets, keep score as you play, and let the leaderboard settle the argument.',
  ambition:
    'The long game is to pay athletes at every level, not just the fraction of a percent who go professional. Sport is already the thing millions of people organise their week around; the money has just never reached them. Provoco is the attempt to change that.',
  highlights: [
    'Games, venues, teams, leagues and knockout brackets',
    'Live scorekeeper mode with results and standings',
    'Social feed, messaging and friends',
    'Native iOS and Android from one codebase',
  ],
  stack: ['React 19', 'TypeScript', 'Tailwind', '.NET', 'Azure', 'Capacitor'],
  tint: ['#FF6A3D', '#FFB067'],
}

/** Other work, shown as portfolio. */
export const otherWork: Project[] = [
  {
    id: 'civitas',
    name: 'Civitas Real Estate Group',
    url: 'civitasrealestategroup.com',
    href: 'https://civitasrealestategroup.com',
    year: '2025',
    role: 'Design · Build',
    blurb: 'Advisors with their feet in the neighborhood.',
    description:
      'A community-rooted real estate team serving Northeast Ohio with care, expertise and integrity. The site takes a quiet, editorial approach — no flashing banners, no pressure — built around helping people find the home that fits the life they are building.',
    highlights: [
      'Buying, selling and full local market search',
      'Agent profiles and team pages',
      'Editorial design language, typography-led',
      'Fast, responsive and accessible throughout',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'React Router'],
    tint: ['#8FA98F', '#D8C9A8'],
  },
]

/* ------------------------------------------------------------------ */
/* About / resume                                                      */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Liam Kruger',
  title: 'Software Engineer · Founder of Purpose Apps',
  // TODO: your city / region.
  location: 'Northeast Ohio',
  initials: 'LK',
  lede:
    'I build software end to end — product thinking, interface design, application code, API, data model and the infrastructure it all runs on.',
  paragraphs: [
    'Most of my work lives at the point where a rough idea has to become something real people can actually use. I like the whole arc of that: shaping the product, designing the interface, writing the backend it leans on, and owning the deploy that puts it in front of someone.',
    'I started Purpose Apps because I think the next decade of automation is going to pull a lot of work out from under people, and I would rather spend my time building the things that fill that gap than watch it open. The flagship is Provoco — a social platform for pickup sport, shipping as a web app and as native iOS and Android builds, aimed at eventually paying athletes at every level.',
    'Alongside that I take on client work — most recently Civitas Real Estate Group, a typography-led site for a Northeast Ohio real estate team. Both are built the same way: TypeScript on the front, a properly modelled API behind it, and infrastructure I can reason about.',
    'I care about the unglamorous parts. Strict typing, tests that actually catch things, accessible markup, and interfaces that stay calm under real data.',
  ],
}

export type Skill = { group: string; items: string[] }

export const skills: Skill[] = [
  {
    group: 'Front-end',
    items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Router'],
  },
  {
    group: 'Back-end',
    items: ['C# / .NET', 'REST API design', 'Entity Framework', 'SQL', 'Azure AD B2C'],
  },
  {
    group: 'Platform',
    items: ['Azure', 'Docker', 'Container Apps', 'Static Web Apps', 'GitHub Actions', 'CI/CD'],
  },
  {
    group: 'Mobile',
    items: ['Capacitor', 'iOS', 'Android', 'App Store & Play submission'],
  },
  {
    group: 'Quality',
    items: ['Vitest', 'Playwright', 'xUnit', 'Accessibility', 'Code review'],
  },
]

export type Role = {
  company: string
  title: string
  period: string
  location?: string
  points: string[]
}

/**
 * TODO — replace with your real employment history.
 * The Purpose Apps entry below is accurate; the second is a placeholder.
 */
export const experience: Role[] = [
  {
    company: 'Purpose Apps',
    title: 'Founder & Software Engineer',
    period: '2025 — Present',
    location: 'Remote',
    points: [
      'Founded Purpose Apps to build products that put income and structure back in people’s hands as automation removes traditional work.',
      'Built Provoco, a pickup-sport platform covering games, venues, leagues, brackets, live scoring, a social feed and messaging — shipped to web plus native iOS and Android via Capacitor.',
      'Design, build and ship end to end: React + TypeScript front-ends, C#/.NET APIs, and Azure infrastructure.',
      'Designed and built the Civitas Real Estate Group site, a typography-led marketing site for a Northeast Ohio real estate team.',
      'Own the full delivery pipeline: GitHub Actions CI, automated Vitest/Playwright/xUnit suites, and App Store and Play Store submissions.',
    ],
  },
  {
    company: 'TODO — Company name',
    title: 'TODO — Your job title',
    period: 'TODO — Start — End',
    location: 'TODO — City, State',
    points: [
      'TODO — What you owned, and the scale of it.',
      'TODO — A result with a number attached to it.',
      'TODO — A technology or practice you introduced.',
    ],
  },
]

export type Education = {
  school: string
  credential: string
  period: string
  detail?: string
}

/** TODO — replace with your real education. */
export const education: Education[] = [
  {
    school: 'TODO — University name',
    credential: 'TODO — Degree, field of study',
    period: 'TODO — Years',
    detail: 'TODO — Honours, relevant coursework, or leave this out.',
  },
]
