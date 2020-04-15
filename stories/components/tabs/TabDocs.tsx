import { FC, HTMLAttributes } from 'react'
import { TabProps } from '@material-ui/core/Tab'

// For documentation only
export type TabDocsProps = Omit<TabProps, keyof HTMLAttributes<HTMLDivElement>>
export const TabDocs: FC<TabDocsProps> = () => null
