/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module "*.woff"
declare module "*.woff2"
declare module "*.ttf"
declare module "*.eot"
// TODO move to supporting folder
declare module "@styled-system/theme-get" {
  export function themeGet(keys: string, fallback?: string): any
}

declare module "@storybook/addon-docs/blocks"
