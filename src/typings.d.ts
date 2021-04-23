/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png' {
  const value: any
  export default value
}

declare module '*.woff'
declare module '*.woff2'
declare module '*.ttf'
declare module '*.eot'

