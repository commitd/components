import * as React from 'react'
import { TabsProps } from '@material-ui/core/Tabs'

export type TabsDocsProps = Omit<
  TabsProps,
  keyof Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    'color' | 'onChange' | 'track'
  >
>
export const TabsDocs: React.FC<TabsDocsProps> = () => null
