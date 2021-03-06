import React from 'react'
import { Logo } from '../logo/Logo'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../theme'
import clsx from 'clsx'
import { style } from '@material-ui/system'

const styleColor = style({
  prop: 'color',
  themeKey: 'palette',
})

const selectColor = (theme: Theme) => ({ color = 'grey.100' }: LoaderProps) =>
  styleColor({ theme, color }).color

export interface LoaderProps {
  /**
   *  Adjust the size in px of the loader (or use a fraction of 1 for percentage)
   *  @default 256
   */
  size?: number | number[]
  /**
   *  Theme based color from the palette, defaults to
   *  @default grey.100
   */
  color?: string
  /**
   *  Change to the style of the loader
   *  @default draw
   */
  variant?: 'draw' | 'spin' | 'flip' | 'scale'
  /**
   * Set false to stop animation of logo
   */
  loading?: boolean
}

export const useStyles = makeStyles<Theme, LoaderProps>((theme) => ({
  '@keyframes loader-stroke': {
    '0%': {
      strokeDashoffset: '2300',
    },
    '100%': {
      strokeDashoffset: '0',
    },
  },
  '@keyframes loader-fill': {
    '0%': {
      fill: 'transparent',
    },
    '100%': {
      fill: selectColor(theme),
    },
  },
  '@keyframes loader-spin': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes loader-flip': {
    '0%': {
      transform: 'perspective(512px) rotateX(0) rotateY(0);',
    },
    '25%': {
      transform: 'perspective(512px) rotateX(180deg) rotateY(0);',
    },
    '50%': {
      transform: 'perspective(512px) rotateX(180deg) rotateY(180deg);',
    },
    '75%': {
      transform: 'perspective(512px) rotateX(0) rotateY(180deg);',
    },
    '100%': {
      transform: 'perspective(512px) rotateX(0) rotateY(360deg);',
    },
  },
  '@keyframes loader-scale': {
    '0%': {
      transform: 'scale(0.5)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  color: {
    '& .commit_logo': {
      transformOrigin: 'center center',
      stroke: selectColor(theme),
      fill: selectColor(theme),
      strokeDasharray: '2300',
    },
  },
  draw: {
    '& .commit_logo': {
      animation:
        '$loader-stroke 3s cubic-bezier(.24,0,.37,1) alternate infinite, $loader-fill 3s cubic-bezier(1, 0, .5, 0) alternate infinite',
    },
  },
  spin: {
    '& .commit_logo': {
      animation: '$loader-spin 1.5s ease infinite',
    },
  },
  flip: {
    '& .commit_logo': {
      transformOrigin: 'center center',
      animation: '$loader-flip 3s cubic-bezier(.09, .57, .49, .9) infinite',
    },
  },
  scale: {
    '& .commit_logo': {
      transformOrigin: 'center center',
      animation:
        '$loader-scale 1.5s cubic-bezier(0.190, 1.000, 0.220, 1.000) infinite alternate both;',
    },
  },
}))

export const Loader = (props: LoaderProps) => {
  const { size = 256, variant = 'draw', loading = true } = props
  const classes = useStyles(props)
  return (
    <Logo
      size={size}
      className={clsx(
        classes.color,
        loading && variant === 'draw' && classes.draw,
        loading && variant === 'spin' && classes.spin,
        loading && variant === 'flip' && classes.flip,
        loading && variant === 'scale' && classes.scale
      )}
    />
  )
}
