import * as React from 'react'
import { AppBarProps } from '../../../src'

export type BaseAppBarProps = Pick<AppBarProps, 'position' | 'color'>
export type RestAppBarProps = Omit<AppBarProps, keyof BaseAppBarProps>

export const BaseAppBarDocs: React.FC<BaseAppBarProps> = () => null
export const RestAppBarDocs: React.FC<RestAppBarProps> = () => null
