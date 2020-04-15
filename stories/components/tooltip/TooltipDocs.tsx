import React, { FC, HTMLAttributes } from 'react'
import { TooltipProps as MaterialTooltipProps } from '@material-ui/core/Tooltip'

// For documentation only
export type TooltipDocsProps = Omit<
  MaterialTooltipProps,
  keyof Omit<HTMLAttributes<HTMLDivElement>, 'title'>
> & {
  /**
   * If true, the tooltip is shown.
   */
  open?: boolean
  /**
   * Tooltip placement.
   * @default bottom
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: React.ReactNode
}
export const TooltipDocs: FC<TooltipDocsProps> = () => null
