import React from 'react'

/**
 * Utility component for conditional wrapping.
 */
export const ConditionalWrapper: React.FC<{
  condition: unknown
  wrapper: (children: React.ReactElement) => React.ReactElement
  children: React.ReactElement
}> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children
