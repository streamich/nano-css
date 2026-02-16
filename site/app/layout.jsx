import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserOrOrgPage = repositoryName.endsWith('.github.io')
const basePath = repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : ''

const withBasePath = (value) => {
  if (!basePath || typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) {
    return value
  }

  if (value === basePath || value.startsWith(`${basePath}/`)) {
    return value
  }

  return `${basePath}${value}`
}

const normalizePageMap = (node) => {
  if (Array.isArray(node)) {
    return node.map(normalizePageMap)
  }

  if (!node || typeof node !== 'object') {
    return node
  }

  const normalized = {}

  for (const [key, value] of Object.entries(node)) {
    if ((key === 'route' || key === 'href') && typeof value === 'string') {
      normalized[key] = withBasePath(value)
    } else {
      normalized[key] = normalizePageMap(value)
    }
  }

  return normalized
}

export const metadata = {
  title: {
    default: 'nano-css — Tiny CSS-in-JS Library',
    template: '%s — nano-css',
  },
  description:
    'nano-css is a tiny 5th generation CSS-in-JS library with a ~0.5 Kb core and 40+ addons. Framework agnostic, isomorphic, and fast.',
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
        nano-css
      </span>
    }
    projectLink="https://github.com/streamich/nano-css"
  />
)

const footer = (
  <Footer>
    <span style={{ fontSize: '0.85rem', color: '#888' }}>
      Unlicense {new Date().getFullYear()} © nano-css contributors
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  const pageMap = normalizePageMap(await getPageMap())

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/streamich/nano-css/tree/master/site"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
