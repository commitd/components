import * as React from 'react'
import { SpacingProps, FlexboxProps } from '@material-ui/system'
import { IconButtonProps as MaterialIconButtonProps } from '@material-ui/core/IconButton'
import { AProps } from '../../../src/internal'

export interface IconButtonProps
  extends MaterialIconButtonProps,
    SpacingProps,
    FlexboxProps,
    AProps {}

export type IconButtonDocsProps = Omit<
  IconButtonProps,
  keyof (SpacingProps &
    FlexboxProps &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>)
>

export const IconButtonDocs: React.FC<IconButtonDocsProps> = () => null
