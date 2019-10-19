import { FC, HTMLAttributes } from 'react'
import Tab, { TabProps } from '@material-ui/core/Tab'
export type TabProps = TabProps
export { Tab }

// For documentation only
export type TabDocsProps = Omit<TabProps, keyof HTMLAttributes<HTMLDivElement>>
export const TabDocs: FC<TabDocsProps> = () => null
