import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TabsRoot, TabsList, Tab, TabPanel } from '.'

export default {
  title: 'Components/Tabs',
  component: TabsRoot,
  subcomponents: { TabsList, Tab, TabPanel },
} as Meta

export const Default: React.FC = () => (
  <TabsRoot>
    <TabsList aria-label="tabs example">
      <Tab value="tab1">One</Tab>
      <Tab value="tab2">Two</Tab>
      <Tab value="tab3">Three</Tab>
    </TabsList>
    <TabPanel value="tab1">Tab one content</TabPanel>
    <TabPanel value="tab2">Tab two content</TabPanel>
    <TabPanel value="tab3">Tab three content</TabPanel>
  </TabsRoot>
)

export const Primary: React.FC = () => (
  <TabsRoot>
    <TabsList aria-label="tabs example">
      <Tab value="tab1" variant="primary">
        One
      </Tab>
      <Tab value="tab2" variant="primary">
        Two
      </Tab>
      <Tab value="tab3" variant="primary">
        Three
      </Tab>
    </TabsList>
    <TabPanel value="tab1">Tab one content</TabPanel>
    <TabPanel value="tab2">Tab two content</TabPanel>
    <TabPanel value="tab3">Tab three content</TabPanel>
  </TabsRoot>
)

export const Secondary: React.FC = () => (
  <TabsRoot>
    <TabsList aria-label="tabs example">
      <Tab value="tab1" variant="secondary">
        One
      </Tab>
      <Tab value="tab2" variant="secondary">
        Two
      </Tab>
      <Tab value="tab3" variant="secondary">
        Three
      </Tab>
    </TabsList>
    <TabPanel value="tab1">Tab one content</TabPanel>
    <TabPanel value="tab2">Tab two content</TabPanel>
    <TabPanel value="tab3">Tab three content</TabPanel>
  </TabsRoot>
)

export const Tertiary: React.FC = () => (
  <TabsRoot>
    <TabsList aria-label="tabs example">
      <Tab value="tab1" variant="tertiary">
        One
      </Tab>
      <Tab value="tab2" variant="tertiary">
        Two
      </Tab>
      <Tab value="tab3" variant="tertiary">
        Three
      </Tab>
    </TabsList>
    <TabPanel value="tab1">Tab one content</TabPanel>
    <TabPanel value="tab2">Tab two content</TabPanel>
    <TabPanel value="tab3">Tab three content</TabPanel>
  </TabsRoot>
)
