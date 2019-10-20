import React, { FC, ComponentType, AriaAttributes, HTMLAttributes } from 'react'
import { palette, PaletteProps } from '@material-ui/system'
import {
  withPositioning,
  PositioningProps,
  withSizing,
  SizingProps
} from '../../internal'
import { styled } from '@material-ui/styles'
import MaterialCard, {
  CardProps as MaterialCardProps
} from '@material-ui/core/Card'
import CardActionArea, {
  CardActionAreaProps
} from '@material-ui/core/CardActionArea'
import CardActions, { CardActionsProps } from '@material-ui/core/CardActions'
import CardContent, { CardContentProps } from '@material-ui/core/CardContent'
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
export type CardMediaProps = MaterialCardMediaProps & SizingProps

export type CardContentProps = CardContentProps
export type CardActionAreaProps = CardActionAreaProps
export type CardActionsProps = CardActionsProps

export const StyledCardHeader = styled(MaterialCardHeader)(palette)

export const CardHeader: FC<CardHeaderProps> = ({
  children,
  ...others
}: CardHeaderProps) => {
  if (typeof children === 'string') {
    return <StyledCardHeader {...others} title={children} />
  }
  return <StyledCardHeader {...others}>{children}</StyledCardHeader>
}
export const CardMedia: ComponentType<CardMediaProps> = withSizing(
  MaterialCardMedia
)

export { CardContent, CardActionArea, CardActions }

// For documentation only
export type CardDocsProps = Pick<MaterialCardProps, 'raised'>
export type CardHeaderDocsProps = Omit<
  CardHeaderProps,
  keyof (AriaAttributes & HTMLAttributes<HTMLDivElement>)
>
export type CardContentDocsProps = Pick<CardContentProps, 'component'>
export type CardActionAreaDocsProps = Omit<
  CardActionAreaProps,
  keyof (AriaAttributes & HTMLAttributes<HTMLDivElement>)
>
export type CardActionsDocsProps = Pick<CardActionsProps, 'disableSpacing'>
export type CardMediaDocsProps = Partial<Pick<CardMediaProps, 'image' | 'src'>>
export const CardDocs: FC<CardDocsProps> = () => null
export const CardHeaderDocs: FC<CardHeaderDocsProps> = () => null
export const CardContentDocs: FC<CardContentDocsProps> = () => null
export const CardActionAreaDocs: FC<CardActionAreaDocsProps> = () => null
export const CardActionsDocs: FC<CardActionsDocsProps> = () => null
export const CardMediaDocs: FC<CardMediaDocsProps> = () => null
