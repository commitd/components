import React from 'react'

type ReactChild = NonNullable<React.ReactNode> | null

/**
 * Utility component for conditional wrapping.
 */
export function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: {
  condition: unknown
  wrapper: (children: React.ReactNode) => React.ReactElement
  children: React.ReactNode
}) {
  return condition ? wrapper(children) : (children as React.ReactElement)
}
