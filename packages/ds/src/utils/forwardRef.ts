import React, { ComponentProps, ElementType, forwardRef } from 'react'
import { Assign } from './types'

export type ForwardRef<T extends ElementType, P = {}> = {
  (
    props: P & React.RefAttributes<React.ElementRef<T>>,
  ): React.ReactElement | null
  displayName?: string
}

type DefineForwardRef = <T extends ElementType, P = {}>(
  render: (
    props: P,
    ref: React.Ref<React.ElementRef<T>>,
  ) => React.ReactElement | null,
) => ForwardRef<T, P>

type ExtendForwardRef = <T extends ElementType, P = {}>(
  render: (
    props: ComponentProps<T> & P,
    ref: React.Ref<React.ElementRef<T>>,
  ) => React.ReactElement | null,
) => ForwardRef<T, Assign<ComponentProps<T>, P>>

export const forwardRefDefine = forwardRef as DefineForwardRef
export const forwardRefExtend = forwardRef as ExtendForwardRef
