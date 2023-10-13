import React from 'react'

/**
 * Utility component for conditional wrapping.
 */
export function ConditionalWrapper<
  T extends Record<string, unknown> = Record<string, never>,
>({
  condition,
  wrapper,
  props,
  children,
}: {
  condition: unknown
  wrapper: <
    Q extends T & {
      children: React.ReactNode
    },
  >(
    props: Q,
  ) => React.ReactElement | null
  props?: T
  children: React.ReactNode
}) {
  return condition
    ? wrapper({ children, ...(props as T) })
    : (children as React.ReactElement)
}
