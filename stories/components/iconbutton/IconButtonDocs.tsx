import { FC, HTMLAttributes } from 'react'
import { SpacingProps, FlexboxProps } from '@material-ui/system'
import { IconButtonProps as MaterialIconButtonProps } from '@material-ui/core/IconButton'
import { AProps } from '../../../src/internal'

export interface IconButtonProps
  extends MaterialIconButtonProps,
    SpacingProps,
    FlexboxProps,
    AProps {}

// For documentation only
export type IconButtonDocsProps = Omit<
  IconButtonProps,
  keyof (SpacingProps &
    FlexboxProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'color'>)
>

export const IconButtonDocs: FC<IconButtonDocsProps> = () => null
