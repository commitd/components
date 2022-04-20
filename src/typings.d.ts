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

/**
 * A utility typing to allow the extraction of just the raw variants from a stiches variant.
 *
 * For example:
 * ```JustVariants<ComponentProps<typeof Spinner>['variant']> // "scale" | "draw" | "spin"```
 */
type JustVariants<C> = C extends string ? C : never
