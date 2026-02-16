import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

const isAssetLikePath = (mdxPath = []) =>
  mdxPath.some((segment) => segment.includes('.'))

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const mdxPath = params?.mdxPath ?? []

  if (isAssetLikePath(mdxPath)) {
    return {}
  }

  try {
    const { metadata } = await importPage(mdxPath)
    return metadata
  } catch {
    return {}
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const mdxPath = params?.mdxPath ?? []

  if (isAssetLikePath(mdxPath)) {
    notFound()
  }

  let page
  try {
    page = await importPage(mdxPath)
  } catch {
    notFound()
  }

  const { default: MDXContent, toc, metadata, sourceCode } = page

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}