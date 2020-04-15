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
// TODO move to supporting folder
declare module '@styled-system/theme-get' {
  export function themeGet(keys: string, fallback?: string): any
}

declare module '@storybook/addon-docs/blocks'
