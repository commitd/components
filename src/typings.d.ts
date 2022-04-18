declare module '*.css'

declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  // eslint-disable-next-line import/no-default-export
  export default value
}

declare module '*.woff'
declare module '*.woff2'
declare module '*.ttf'
declare module '*.eot'

export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P]
}
