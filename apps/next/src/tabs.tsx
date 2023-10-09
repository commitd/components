import { Tab, TabContent, Tabs, TabsList } from '@committed/ds'

export const TabsExample = () => (
  <Tabs defaultValue="tab1" variant="solid">
    <TabsList>
      <Tab value="tab1">One</Tab>
      <Tab value="tab2">Two</Tab>
      <Tab value="tab3">Three</Tab>
    </TabsList>
    <TabContent value="tab1">Tab one content</TabContent>
    <TabContent value="tab2">Tab two content</TabContent>
    <TabContent value="tab3">Tab three content</TabContent>
  </Tabs>
)
