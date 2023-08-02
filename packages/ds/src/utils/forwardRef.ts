import React, { ComponentProps, ElementType, forwardRef } from 'react'

export type ForwardRef<T extends ElementType, P = {}> = {
  (props: ComponentProps<T> & P & React.RefAttributes<T>): JSX.Element
  displayName?: string
}

type FixedForwardRef = <T extends ElementType, P = {}>(
  render: (
    props: ComponentProps<T> & P,
    ref: React.Ref<T>,
  ) => React.ReactElement,
) => ForwardRef<T, P>

export const fixedForwardRef = forwardRef as FixedForwardRef
