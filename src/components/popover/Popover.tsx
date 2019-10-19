import { FC, HTMLAttributes } from 'react'
import Popover, { PopoverProps } from '@material-ui/core/Popover'

export type PopoverProps = PopoverProps
export { Popover }

// For documentation only
export type PopoverDocsProps = Omit<
  PopoverProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export const PopoverDocs: FC<PopoverDocsProps> = () => null
