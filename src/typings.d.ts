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

// Next utils are written in ts so can be removed later
declare module '@material-ui/utils' {
  export interface DeepmergeOptions {
    clone?: boolean
  }

  export function deepmerge<T>(
    target: T,
    source: unknown,
    options?: DeepmergeOptions
  ): T
}
