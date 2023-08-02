import { SystemStyleObject } from '@committed/ss/types'
import { ElementType, ReactNode } from 'react'
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

export type CComponentProps = Prettify<
  ChildProps & AsChildProps & CssProps & ClassNameProps
>

export type CComponent<T extends ElementType, P = {}> = ForwardRef<
  T,
  P & CComponentProps
>

/////////////////////
// Util types

export type Prettify<T> = {
  [K in keyof T]: T[K]
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {}

export type Assign<T, U> = Omit<T, keyof U> & U

export type PartialPick<T, K extends keyof T> = {
  [P in K]?: T[P]
}
