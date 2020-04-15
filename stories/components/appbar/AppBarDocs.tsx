import { FC } from 'react'
import { AppBarProps } from '@material-ui/core/AppBar'

// For documentation only
export type BaseAppBarProps = Pick<AppBarProps, 'position' | 'color'>
export type RestAppBarProps = Omit<AppBarProps, keyof BaseAppBarProps>
export const BaseAppBarDocs: FC<BaseAppBarProps> = (props: BaseAppBarProps) =>
  null
export const RestAppBarDocs: FC<RestAppBarProps> = (props: RestAppBarProps) =>
  null
