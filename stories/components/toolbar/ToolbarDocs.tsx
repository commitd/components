import * as React from 'react'
import { ToolbarProps } from '@material-ui/core/Toolbar'

export type ToolbarDocsProps = Omit<
  ToolbarProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export const ToolbarDocs: React.FC<ToolbarDocsProps> = () => null
