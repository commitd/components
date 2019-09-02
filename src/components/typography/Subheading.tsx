import * as React from 'react'
import { Typography, TypographyProps } from './Typography'
import { withStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

// Work out correct way to use theme sizes
const styles = {
  h1: {
    fontSize: '50px',
    color: grey[500]
  },
  h2: {
    fontSize: '40px',
    color: grey[500]
  },
  h3: {
    fontSize: '30px',
    color: grey[500]
  },
  h4: {
    fontSize: '20px',
    color: grey[500]
  },
  h5: {
    fontSize: '10px',
    color: grey[500]
  }
}

export type SubheadingProps = TypographyProps
type StyledSubheadingProps = SubheadingProps & { classes: any }

export const Subheading: {
  h1: React.ComponentType<SubheadingProps>
  h2: React.ComponentType<SubheadingProps>
  h3: React.ComponentType<SubheadingProps>
  h4: React.ComponentType<SubheadingProps>
  h5: React.ComponentType<SubheadingProps>
} = {
  h1: withStyles(styles)((props: StyledSubheadingProps) => (
    <Typography
      {...props}
      className={props.classes.h1}
      variant="subtitle1"
      component="h2"
    />
  )),
  h2: withStyles(styles)((props: StyledSubheadingProps) => (
    <Typography
      {...props}
      className={props.classes.h2}
      variant="subtitle1"
      component="h3"
    />
  )),
  h3: withStyles(styles)((props: StyledSubheadingProps) => (
    <Typography
      {...props}
      className={props.classes.h3}
      variant="subtitle1"
      component="h4"
    />
  )),
  h4: withStyles(styles)((props: StyledSubheadingProps) => (
    <Typography
      {...props}
      className={props.classes.h4}
      variant="subtitle1"
      component="h5"
    />
  )),
  h5: withStyles(styles)((props: StyledSubheadingProps) => (
    <Typography
      {...props}
      className={props.classes.h5}
      variant="subtitle1"
      component="h6"
    />
  ))
}

export default Subheading
