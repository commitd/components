import React, { FC, ComponentType, AriaAttributes, HTMLAttributes } from 'react'
import { PaletteProps } from '@material-ui/system'
import { SizingProps } from '../../../src/internal'
import { styled } from '@material-ui/styles'
import { CardProps as MaterialCardProps } from '@material-ui/core/Card'
import { CardActionAreaProps } from '@material-ui/core/CardActionArea'
import { CardActionsProps } from '@material-ui/core/CardActions'
import { OverrideComponent } from '../../../src/internal/util'
import { CardHeaderProps as MaterialCardHeaderProps } from '@material-ui/core/CardHeader'
import { CardMediaProps as MaterialCardMediaProps } from '@material-ui/core/CardMedia'

// Card supplementary components

export type CardHeaderProps = MaterialCardHeaderProps & PaletteProps
export type CardMediaProps = MaterialCardMediaProps & SizingProps

// For documentation only
export type CardDocsProps = Pick<MaterialCardProps, 'raised'>
export type CardHeaderDocsProps = Omit<
  CardHeaderProps,
  keyof (AriaAttributes & HTMLAttributes<HTMLDivElement>)
>
export type CardContentDocsProps = OverrideComponent
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
