import { FC, HTMLAttributes } from 'react'
import { BadgeProps } from '@material-ui/core/Badge'

export type BaseBadgeProps = Omit<
  BadgeProps,
  keyof Omit<HTMLAttributes<HTMLDivElement>, 'color'>
>

export const BaseBadgeDocs: FC<BaseBadgeProps> = () => null
