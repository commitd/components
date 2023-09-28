import {
  ComponentProps,
  ElementRef,
  ElementType,
  ReactElement,
  Ref,
  RefAttributes,
  forwardRef,
} from 'react'
import { Assign } from './types'

export type ForwardRef<TType extends ElementType, TProps = {}> = {
  (props: TProps & RefAttributes<ElementRef<TType>>): ReactElement | null
  displayName?: string
}

type DefineForwardRef = <TType extends ElementType, TProps = {}>(
  render: (props: TProps, ref: Ref<ElementRef<TType>>) => ReactElement | null,
) => ForwardRef<TType, TProps>

type OmitForwardRef = <
  TType extends ElementType,
  TOmit extends keyof ComponentProps<TType> = never,
>(
  render: (
    props: Omit<ComponentProps<TType>, TOmit>,
    ref: Ref<ElementRef<TType>>,
  ) => ReactElement | null,
) => ForwardRef<TType, Omit<ComponentProps<TType>, TOmit>>

type ExtendForwardRef = <
  TType extends ElementType,
  TProps = {},
  TOmit extends keyof ComponentProps<TType> = never,
>(
  render: (
    props: Assign<Omit<ComponentProps<TType>, TOmit>, TProps>,
    ref: Ref<ElementRef<TType>>,
  ) => ReactElement | null,
) => ForwardRef<TType, Assign<Omit<ComponentProps<TType>, TOmit>, TProps>>

export const forwardRefDefine = forwardRef as DefineForwardRef
export const forwardRefOmit = forwardRef as OmitForwardRef
export const forwardRefExtend = forwardRef as ExtendForwardRef
