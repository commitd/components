import * as React from 'react'
import { SelectProps } from '@material-ui/core/Select'

export type SelectDocsProps = Omit<
  SelectProps,
  keyof Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    'color' | 'onChange' | 'id'
  >
>
export const SelectDocs: React.FC<SelectDocsProps> = () => null
