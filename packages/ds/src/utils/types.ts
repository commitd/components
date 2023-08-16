import { SystemStyleObject } from '@committed/ss/types'
import { SystemProperties } from '@committed/ss/types/style-props'
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

////////////////////
// Box props

export type BackgroundProps = Pick<
  SystemProperties,
  'bg' | 'background' | 'bgColor' | 'backgroundColor' | 'bgGradient'
>

export type SizeProps = Pick<
  SystemProperties,
  | 'size'
  | 'w'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'minW'
  | 'maxW'
  | 'h'
  | 'height'
  | 'minHeight'
  | 'maxHeight'
  | 'minH'
  | 'maxH'
>

export type FlexProps = Pick<
  SystemProperties,
  | 'display'
  | 'flex'
  | 'flexDirection'
  | 'flexWrap'
  | 'flexFlow'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
>

export type FlexItemProps = Pick<
  SystemProperties,
  'flex' | 'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'alignSelf'
>

export type HideProps = Pick<SystemProperties, 'hideFrom' | 'hideBelow'>
