import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserOrOrgPage = repositoryName.endsWith('.github.io')
const basePath = repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : ''

const withBasePath = (href) => {
  if (!basePath || typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) {
    return href
  }

  if (href === basePath || href.startsWith(`${basePath}/`)) {
    return href
  }

  return `${basePath}${href}`
}

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    a: ({ href, ...props }) => {
      const Anchor = components?.a || themeComponents.a || 'a'
      return <Anchor href={withBasePath(href)} {...props} />
    },
  }
}
