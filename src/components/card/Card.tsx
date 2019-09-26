import * as React from 'react'
import { palette, PaletteProps } from '@material-ui/system'
import {
  withPositioning,
  PositioningProps,
  withSizing,
  SizingProps
} from '../internal'
import { styled } from '@material-ui/styles'
import MaterialCard, {
  CardProps as MaterialCardProps
} from '@material-ui/core/Card'
import MaterialCardActionArea, {
  CardActionAreaProps as MaterialCardActionAreaProps
} from '@material-ui/core/CardActionArea'
import MaterialCardActions, {
  CardActionsProps as MaterialCardActionsProps
} from '@material-ui/core/CardActions'
import MaterialCardContent, {
  CardContentProps as MaterialCardContentProps
} from '@material-ui/core/CardContent'
import MaterialCardHeader, {
  CardHeaderProps as MaterialCardHeaderProps
} from '@material-ui/core/CardHeader'
import MaterialCardMedia, {
  CardMediaProps as MaterialCardMediaProps
} from '@material-ui/core/CardMedia'

export type CardProps = MaterialCardProps & PositioningProps

export const Card = withPositioning<CardProps>(MaterialCard)

// Card supplementary components

export type CardHeaderProps = MaterialCardHeaderProps & PaletteProps
export type CardContentProps = MaterialCardContentProps
export type CardActionAreaProps = MaterialCardActionAreaProps
export type CardActionsProps = MaterialCardActionsProps
export type CardMediaProps = MaterialCardMediaProps & SizingProps

export const StyledCardHeader = styled(MaterialCardHeader)(palette)

export const CardHeader: React.ComponentType<CardHeaderProps> = ({
  children,
  ...others
}: CardHeaderProps) => {
  if (typeof (children && children) === 'string') {
    return <StyledCardHeader {...others} title={children} />
  }
  return <StyledCardHeader {...others}>{children}</StyledCardHeader>
}
export const CardContent: React.ComponentType<
  CardContentProps
> = MaterialCardContent
export const CardActionArea: React.ComponentType<
  CardActionAreaProps
> = MaterialCardActionArea
export const CardActions: React.ComponentType<
  CardActionsProps
> = MaterialCardActions
export const CardMedia: React.ComponentType<CardMediaProps> = withSizing(
  MaterialCardMedia
)
