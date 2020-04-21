import * as React from 'react'
// TODO use when storybook issue fixed
//import { TabPanelProps, BoxProps } from '../../../src'
//type BaseTabPanelProps = Omit<TabPanelProps, keyof BoxProps>

import { BoxProps } from '@material-ui/core/Box'

export type BaseTabPanelProps = {
  /**
   * Content of the tab panel
   */
  children?: React.ReactNode
  /**
   * The index of the panel, can be anything that can be compared with ===
   */
  index: any
  /**
   * The currently selected index
   */
  selected: any
}

export type TabPanelProps = BaseTabPanelProps & BoxProps

export const TabPanelDocs: React.FC<BaseTabPanelProps> = () => null
