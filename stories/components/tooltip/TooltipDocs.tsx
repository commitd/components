import * as React from 'react'
import { TooltipProps } from '@material-ui/core/Tooltip'

export type TooltipDocsProps = {
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
} & Omit<
  TooltipProps,
  keyof Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
>
export const TooltipDocs: React.FC<TooltipDocsProps> = (
  props: TooltipDocsProps
) => null
