import { FC, HTMLAttributes } from 'react'
import { TabsProps } from '@material-ui/core/Tabs'

// For documentation only
export type TabsDocsProps = Omit<
  TabsProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'track'>
>
export const TabsDocs: FC<TabsDocsProps> = () => null
