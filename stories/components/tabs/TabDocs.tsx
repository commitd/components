import * as React from 'react'
import { TabProps } from '@material-ui/core/Tab'

export type TabDocsProps = Omit<
  TabProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>
export const TabDocs: React.FC<TabDocsProps> = () => null
