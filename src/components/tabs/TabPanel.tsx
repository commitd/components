import * as React from 'react'
import { Box, BoxProps } from '../box/Box'

export type TabPanelProps = {
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
} & BoxProps

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

TabPanel.displayName = 'TabPanel'
export default TabPanel
