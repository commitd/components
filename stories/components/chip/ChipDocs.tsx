import { FC, HTMLAttributes } from 'react'
import { ChipProps as MaterialChipProps } from '@material-ui/core/Chip'

// For documentation only
export type ChipDocsProps = Omit<
  MaterialChipProps,
  keyof Omit<HTMLAttributes<HTMLDivElement>, 'color'>
>

export const ChipDocs: FC<ChipDocsProps> = () => null
