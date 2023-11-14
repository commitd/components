'use client'
import React from 'react'

/**
 * Utility component for conditional wrapping.
 */
export function SafeConditional({
  condition,
  wrapper,
  children,
}: {
  condition: unknown
  wrapper: React.ReactElement
  children: React.ReactNode
}) {
  return condition
    ? React.cloneElement(wrapper, { children })
    : (children as React.ReactElement)
}
