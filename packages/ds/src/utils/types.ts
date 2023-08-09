import { SystemStyleObject } from '@committed/ss/types'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { ForwardRef } from './forwardRef'
/////////////////////
// Props types

export type AsChildProps = {
  asChild?: boolean
}

export type ChildProps = {
  children?: ReactNode
}

export type CssProps = {
  css?: SystemStyleObject
}

export type ClassNameProps = {
  className?: string
}

export type CComponentProps = Prettify<ChildProps & CssProps & ClassNameProps>
export type PolyCComponentProps = Prettify<CComponentProps & AsChildProps>

export type CComponent<T extends ElementType, P = {}> = ForwardRef<
  T,
  P & CComponentProps
>

export type PolyCComponent<T extends ElementType, P = {}> = ForwardRef<
  T,
  P & PolyCComponentProps
>

/////////////////////
// Util types

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Prettify<T> = {
  [K in keyof T]: T[K]
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {}

export type Assign<T, U> = Omit<T, keyof U> & U

export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P]
}

export type PickProps<
  T extends ElementType,
  K extends keyof ComponentProps<T>,
> = {
  [P in K]?: ComponentProps<T>[P]
}
