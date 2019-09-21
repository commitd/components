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

export const Card = withPositioning(MaterialCard)
Card.displayName = 'Card'

export default Card as React.FC<CardProps>

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
CardHeader.displayName = 'CardHeader'
export const CardContent: React.ComponentType<
  CardContentProps
> = MaterialCardContent
CardContent.displayName = 'CardContent'
export const CardActionArea: React.ComponentType<
  CardActionAreaProps
> = MaterialCardActionArea
CardActionArea.displayName = 'CardActionArea'
export const CardActions: React.ComponentType<
  CardActionsProps
> = MaterialCardActions
CardActions.displayName = 'CardActions'
export const CardMedia: React.ComponentType<CardMediaProps> = withSizing(
  MaterialCardMedia
)
CardMedia.displayName = 'CardMedia'
