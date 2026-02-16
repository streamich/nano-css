import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

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
    projectLink="https://github.com/nicknisi/nano-css"
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
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/nicknisi/nano-css/tree/master/website"
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
