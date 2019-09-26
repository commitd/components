import * as React from 'react'
import MaterialPopover, {
  PopoverProps as MaterialPopoverProps
} from '@material-ui/core/Popover'

export type PopoverProps = MaterialPopoverProps

export const Popover: React.ComponentType<PopoverProps> = MaterialPopover
