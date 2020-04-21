import * as React from 'react'
import { PaletteProps } from '@material-ui/system'
import { SizingProps } from '../../../src/internal'
import { CardProps as MaterialCardProps } from '@material-ui/core/Card'
import { CardContentProps } from '@material-ui/core/CardContent'
import { CardActionAreaProps } from '@material-ui/core/CardActionArea'
import { CardActionsProps } from '@material-ui/core/CardActions'
import { CardHeaderProps as MaterialCardHeaderProps } from '@material-ui/core/CardHeader'
import { CardMediaProps as MaterialCardMediaProps } from '@material-ui/core/CardMedia'

// Card supplementary components

export type CardHeaderProps = MaterialCardHeaderProps & PaletteProps
export type CardMediaProps = MaterialCardMediaProps & SizingProps

export type CardDocsProps = Pick<MaterialCardProps, 'raised'>
export type CardHeaderDocsProps = Omit<
  CardHeaderProps,
  keyof (React.AriaAttributes & React.HTMLAttributes<HTMLDivElement>)
>
export type CardContentDocsProps = Omit<
  CardContentProps,
  keyof (React.AriaAttributes & React.HTMLAttributes<HTMLDivElement>)
>
export type CardActionAreaDocsProps = Omit<
  CardActionAreaProps,
  keyof (React.AriaAttributes & React.HTMLAttributes<HTMLDivElement>)
>
export type CardActionsDocsProps = Pick<CardActionsProps, 'disableSpacing'>
export type CardMediaDocsProps = Partial<Pick<CardMediaProps, 'image' | 'src'>>
export const CardDocs: React.FC<CardDocsProps> = () => null
export const CardHeaderDocs: React.FC<CardHeaderDocsProps> = () => null
export const CardContentDocs: React.FC<CardContentDocsProps> = () => null
export const CardActionAreaDocs: React.FC<CardActionAreaDocsProps> = () => null
export const CardActionsDocs: React.FC<CardActionsDocsProps> = () => null
export const CardMediaDocs: React.FC<CardMediaDocsProps> = () => null
