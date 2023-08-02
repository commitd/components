import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import {
  Link as RouterLink,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { Breadcrumbs, Crumb } from '.'
import { Divider } from '../Divider'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { Crumb },
} as Meta

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Crumb href="/">Home</Crumb>
    <Crumb href="/first">First</Crumb>
    <Crumb href="/first/second" isCurrentPage>
      Second
    </Crumb>
  </Breadcrumbs>
)
export const Primary = Template.bind({})
Primary.args = {}

export const WithRouter = () => {
  return (
    <MemoryRouter>
      <Breadcrumbs>
        <Crumb asChild>
          <RouterLink to="/">Home</RouterLink>
        </Crumb>
        <Crumb asChild>
          <RouterLink to="/one">One</RouterLink>
        </Crumb>
        <Crumb asChild isCurrentPage>
          <RouterLink to="/one/two">Two</RouterLink>
        </Crumb>
      </Breadcrumbs>
      <Divider />
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="/one" element={<div>Route 1</div>} />
        <Route path="/one/two" element={<div>Route 2</div>} />
      </Routes>
    </MemoryRouter>
  )
}
