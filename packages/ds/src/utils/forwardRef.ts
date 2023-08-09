import React, { ComponentProps, ElementType, forwardRef } from 'react'

export type ForwardRef<T extends ElementType, P = {}> = {
  (
    props: ComponentProps<T> & P & React.RefAttributes<React.ElementRef<T>>,
  ): React.ReactElement | null
  displayName?: string
}

type FixedForwardRef = <T extends ElementType, P = {}>(
  render: (
    props: ComponentProps<T> & P,
    ref: React.Ref<React.ElementRef<T>>,
  ) => React.ReactElement | null,
) => ForwardRef<T, P>

export const fixedForwardRef = forwardRef as FixedForwardRef
