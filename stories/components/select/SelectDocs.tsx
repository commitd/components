import { FC, HTMLAttributes } from 'react'
import { SelectProps } from '@material-ui/core/Select'

// For documentation only
export type SelectDocsProps = Omit<
  SelectProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'id'>
>
export const SelectDocs: FC<SelectDocsProps> = () => null
