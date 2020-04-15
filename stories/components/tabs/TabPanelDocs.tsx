import { FC } from 'react'
import { TabPanelProps, BoxProps } from '../../../src'

// export type BaseTabPanelProps = {
//   /**
//    * Content of the tab panel
//    */
//   children?: React.ReactNode
//   /**
//    * The index of the panel, can be anything that can be compared with ===
//    */
//   index: any
//   /**
//    * The currently selected index
//    */
//   selected: any
// }

// export type TabPanelProps = BaseTabPanelProps & BoxProps

type BaseTabPanelProps = Omit<TabPanelProps, keyof BoxProps>

// For documentation only
export const TabPanelDocs: FC<BaseTabPanelProps> = () => null
