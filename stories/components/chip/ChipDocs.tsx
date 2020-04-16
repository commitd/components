import * as React from 'react'
import { ChipProps as MaterialChipProps } from '@material-ui/core/Chip'

export type ChipDocsProps = Omit<
  MaterialChipProps,
  keyof Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>
>

export const ChipDocs: React.FC<ChipDocsProps> = () => null
