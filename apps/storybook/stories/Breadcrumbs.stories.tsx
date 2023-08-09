import { Breadcrumbs, Crumb, Divider } from '@committed/ds'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import {
  MemoryRouter,
  Route,
  Link as RouterLink,
  Routes,
} from 'react-router-dom'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { Crumb },
} as Meta

export const Default: StoryObj<typeof Breadcrumbs> = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/first">First</Crumb>
      <Crumb href="/first/second" isCurrentPage>
        Second
      </Crumb>
    </Breadcrumbs>
  ),
}

export const WithRouter: StoryFn = () => {
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
