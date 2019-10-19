import { FC, HTMLAttributes } from 'react'
import Tabs, { TabsProps } from '@material-ui/core/Tabs'
export type TabsProps = TabsProps
export { Tabs }

// For documentation only
export type TabsDocsProps = Omit<
  TabsProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'track'>
>
export const TabsDocs: FC<TabsDocsProps> = () => null
