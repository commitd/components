import * as React from 'react'
import { PopoverProps } from '@material-ui/core/Popover'

export type PopoverDocsProps = Omit<
  PopoverProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export const PopoverDocs: React.FC<PopoverDocsProps> = () => null
