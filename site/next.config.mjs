import nextra from 'nextra'
import {fileURLToPath} from 'node:url'

const withNextra = nextra({
  // Nextra options
})

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserOrOrgPage = repositoryName.endsWith('.github.io')
const basePath = repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : ''
const outputFileTracingRoot = fileURLToPath(new URL('..', import.meta.url))

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot,
  basePath,
  assetPrefix: basePath || undefined,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
})
