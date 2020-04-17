import React from 'react'
import MaterialCard, {
  CardProps as MaterialCardProps,
} from '@material-ui/core/Card'
import CardActionArea, {
  CardActionAreaProps,
} from '@material-ui/core/CardActionArea'
import CardActions, { CardActionsProps } from '@material-ui/core/CardActions'
import CardContent, { CardContentProps } from '@material-ui/core/CardContent'
import MaterialCardHeader, {
  CardHeaderProps as MaterialCardHeaderProps,
} from '@material-ui/core/CardHeader'
import MaterialCardMedia, {
  CardMediaProps as MaterialCardMediaProps,
} from '@material-ui/core/CardMedia'
import { styled } from '@material-ui/styles'
import { palette, PaletteProps } from '@material-ui/system'
import { withPositioning, PositioningProps } from '../../internal/positioning'
import { SizingProps, withSizing } from '../../internal'

export type CardProps = MaterialCardProps & PositioningProps

export const Card: React.ComponentType<CardProps> = withPositioning<
  MaterialCardProps
>(MaterialCard)

// Card supplementary components

export type CardHeaderProps = MaterialCardHeaderProps & PaletteProps
export type CardMediaProps = MaterialCardMediaProps & SizingProps

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

export { CardContent, CardActionArea, CardActions }
export type { CardContentProps, CardActionAreaProps, CardActionsProps }
