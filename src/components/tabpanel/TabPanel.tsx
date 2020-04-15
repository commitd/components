import React from 'react'
import { Box, BoxProps } from '../box/Box'

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

export const TabPanel = ({
  children,
  index,
  selected,
  ...others
}: TabPanelProps) => (
  <Box
    role="tabpanel"
    hidden={selected !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...others}
  >
    {children}
  </Box>
)
