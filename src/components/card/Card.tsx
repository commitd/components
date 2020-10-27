import MaterialCard, {
  CardProps as MaterialCardProps,
} from '@material-ui/core/Card'
import CardActionArea, {
  CardActionAreaProps,
} from '@material-ui/core/CardActionArea'
import MaterialCardActions, {
  CardActionsProps as MaterialCardActionsProps,
} from '@material-ui/core/CardActions'
import MaterialCardContent, {
  CardContentProps,
} from '@material-ui/core/CardContent'
import MaterialCardHeader, {
  CardHeaderProps as MaterialCardHeaderProps,
} from '@material-ui/core/CardHeader'
import MaterialCardMedia, {
  CardMediaProps as MaterialCardMediaProps,
} from '@material-ui/core/CardMedia'
import { styled } from '@material-ui/styles'
import {
  palette,
  PaletteProps,
  flexbox,
  FlexboxProps,
} from '@material-ui/system'
import React from 'react'
import {
  SizingProps,
  withSizing,
  withWrapper,
  WithWrapperProps,
} from '../../internal'

export type CardProps = MaterialCardProps & WithWrapperProps

export const Card: React.ComponentType<CardProps> = withWrapper<
  MaterialCardProps
>(MaterialCard)

// Card supplementary components

export type CardHeaderProps = MaterialCardHeaderProps & PaletteProps
export type CardMediaProps = MaterialCardMediaProps & SizingProps
export type CardActionsProps = MaterialCardActionsProps & FlexboxProps

export const StyledCardHeader = styled(MaterialCardHeader)(palette)

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  ...others
}: CardHeaderProps) => {
  if (typeof children === 'string') {
    return <StyledCardHeader {...others} title={children} />
  }
  return <StyledCardHeader {...others}>{children}</StyledCardHeader>
}
export const CardMedia: React.ComponentType<CardMediaProps> = withSizing(
  MaterialCardMedia
)

export const CardContent: React.ComponentType<CardContentProps> = withSizing(
  MaterialCardContent
)

export const CardActions: React.ComponentType<CardActionsProps> = styled<
  React.FC<MaterialCardActionsProps>
>(MaterialCardActions)(flexbox)

export { CardActionArea }
export type { CardContentProps, CardActionAreaProps }
