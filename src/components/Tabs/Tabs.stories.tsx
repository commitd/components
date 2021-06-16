import { Meta } from '@storybook/react'
import React from 'react'
import { Tab, TabContent, TabsList, TabsRoot } from '.'

export default {
  title: 'Components/Tabs',
  component: TabsRoot,
  subcomponents: { TabsList, Tab, TabContent },
} as Meta

export const Default: React.FC = () => (
  <TabsRoot>
    <TabsList aria-label="tabs example">
      <Tab value="tab1">One</Tab>
      <Tab value="tab2">Two</Tab>
      <Tab value="tab3">Three</Tab>
    </TabsList>
    <TabContent value="tab1">Tab one content</TabContent>
    <TabContent value="tab2">Tab two content</TabContent>
    <TabContent value="tab3">Tab three content</TabContent>
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
    <TabContent value="tab1">Tab one content</TabContent>
    <TabContent value="tab2">Tab two content</TabContent>
    <TabContent value="tab3">Tab three content</TabContent>
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
    <TabContent value="tab1">Tab one content</TabContent>
    <TabContent value="tab2">Tab two content</TabContent>
    <TabContent value="tab3">Tab three content</TabContent>
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
    <TabContent value="tab1">Tab one content</TabContent>
    <TabContent value="tab2">Tab two content</TabContent>
    <TabContent value="tab3">Tab three content</TabContent>
  </TabsRoot>
)
