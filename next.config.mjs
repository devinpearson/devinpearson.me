import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // The Docker image (Dockerfile) builds with NEXT_OUTPUT=standalone: a self-contained
  // server.js with only the node_modules it needs. Local builds keep `next start`.
  output: process.env.NEXT_OUTPUT === 'standalone' ? 'standalone' : undefined,
  // Trace from this folder, not a stray lockfile higher up on a dev machine.
  outputFileTracingRoot: import.meta.dirname,
  turbopack: { root: import.meta.dirname },
}

// Plugins are named, not imported: Turbopack passes loader options across to Rust, so they
// have to be serialisable.
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['@mapbox/rehype-prism'],
  },
})

export default withMDX(nextConfig)
