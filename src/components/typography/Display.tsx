import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme } from '../../theme'
import { Typography, TypographyProps } from './Typography'

export type DisplayProps<C extends React.ElementType> = Omit<
  TypographyProps<C>,
  'variant'
>

const displayFont = ({ theme }: { theme: Theme }) => theme.fonts.display

export const Display: {
  d1: <C extends React.ElementType>(props: DisplayProps<C>) => JSX.Element
  d2: <C extends React.ElementType>(props: DisplayProps<C>) => JSX.Element
  d3: <C extends React.ElementType>(props: DisplayProps<C>) => JSX.Element
  d4: <C extends React.ElementType>(props: DisplayProps<C>) => JSX.Element
  d5: <C extends React.ElementType>(props: DisplayProps<C>) => JSX.Element
  d6: <C extends React.ElementType>(props: DisplayProps<C>) => JSX.Element
} = {
  d1: styled((props) => <Typography {...props} variant="h1" />)(
    displayFont
  ) as any,
  d2: styled((props: DisplayProps<any>) => (
    <Typography {...props} variant="h2" />
  ))(displayFont) as (props: DisplayProps<any>) => JSX.Element,
  d3: styled((props: DisplayProps<any>) => (
    <Typography {...props} variant="h3" />
  ))(displayFont) as (props: DisplayProps<any>) => JSX.Element,
  d4: styled((props: DisplayProps<any>) => (
    <Typography {...props} variant="h4" />
  ))(displayFont) as (props: DisplayProps<any>) => JSX.Element,
  d5: styled((props: DisplayProps<any>) => (
    <Typography {...props} variant="h5" />
  ))(displayFont) as (props: DisplayProps<any>) => JSX.Element,
  d6: styled((props: DisplayProps<any>) => (
    <Typography {...props} variant="h6" />
  ))(displayFont) as (props: DisplayProps<any>) => JSX.Element,
}
