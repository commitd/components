import { FC } from 'react'
import { AppBarProps } from '@material-ui/core/AppBar'

export type BaseAppBarProps = Pick<AppBarProps, 'position' | 'color'>
export type RestAppBarProps = Omit<AppBarProps, keyof BaseAppBarProps>

export const BaseAppBarDocs: FC<BaseAppBarProps> = () => null
export const RestAppBarDocs: FC<RestAppBarProps> = () => null
