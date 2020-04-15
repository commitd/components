import { FC, HTMLAttributes } from 'react'
import { PopoverProps } from '@material-ui/core/Popover'

// For documentation only
export type PopoverDocsProps = Omit<
  PopoverProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export const PopoverDocs: FC<PopoverDocsProps> = () => null
