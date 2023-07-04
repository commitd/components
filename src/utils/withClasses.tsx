/* eslint-disable @typescript-eslint/ban-types */
import React, { ComponentType, forwardRef, Ref } from 'react'
import { cx } from '../../styled-system/css'

type ClassList = string[]

interface ClassNameProps {
  className?: string
}

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements

export function withClasses<P extends ClassNameProps>(
  ComposedComponent: IntrinsicElementsKeys | ComponentType<P>,
  ...classes: ClassList
) {
  return forwardRef<Ref<typeof ComposedComponent>, P>(function WithClasses(
    props,
    forwardedRef
  ) {
    const { className, ...rest } = props as P
    return (
      <ComposedComponent
        {...rest}
        className={cx(className, ...classes)}
        ref={forwardedRef}
      />
    )
  })
}
