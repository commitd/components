import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme } from '../../theme'
import { Typography, TypographyProps } from './Typography'

export type HeadingProps<C extends React.ElementType> = Omit<
  TypographyProps<C>,
  'variant'
>

const headingFont = ({ theme }: { theme: Theme }) => theme.fonts.heading

export const Heading: {
  h1: <C extends React.ElementType>(props: HeadingProps<C>) => JSX.Element
  h2: <C extends React.ElementType>(props: HeadingProps<C>) => JSX.Element
  h3: <C extends React.ElementType>(props: HeadingProps<C>) => JSX.Element
  h4: <C extends React.ElementType>(props: HeadingProps<C>) => JSX.Element
  h5: <C extends React.ElementType>(props: HeadingProps<C>) => JSX.Element
  h6: <C extends React.ElementType>(props: HeadingProps<C>) => JSX.Element
} = {
  h1: styled((props: HeadingProps<any>) => (
    <Typography {...props} variant="h1" />
  ))(headingFont) as (props: HeadingProps<any>) => JSX.Element,
  h2: styled((props: HeadingProps<any>) => (
    <Typography {...props} variant="h2" />
  ))(headingFont) as (props: HeadingProps<any>) => JSX.Element,
  h3: styled((props: HeadingProps<any>) => (
    <Typography {...props} variant="h3" />
  ))(headingFont) as (props: HeadingProps<any>) => JSX.Element,
  h4: styled((props: HeadingProps<any>) => (
    <Typography {...props} variant="h4" />
  ))(headingFont) as (props: HeadingProps<any>) => JSX.Element,
  h5: styled((props: HeadingProps<any>) => (
    <Typography {...props} variant="h5" />
  ))(headingFont) as (props: HeadingProps<any>) => JSX.Element,
  h6: styled((props: HeadingProps<any>) => (
    <Typography {...props} variant="h6" />
  ))(headingFont) as (props: HeadingProps<any>) => JSX.Element,
}
