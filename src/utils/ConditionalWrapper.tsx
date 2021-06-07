import React from 'react'

/**
 * Utility component for conditional wrapping.
 */
export const ConditionalWrapper: React.FC<{
  condition: unknown
  wrapper: (children: React.ReactChildren) => React.ReactElement
  children: React.ReactChildren
}> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : <>{children}</>
