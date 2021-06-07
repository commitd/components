import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Pagination } from '.'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta

export const Default: Story = (args) => <Pagination count={10} {...args} />

const Template: Story = (args) => <Pagination count={10} {...args} />
export const Primary = Template.bind({})
Primary.args = {
  count: 10,
  page: 1,
}

export const Controlled: Story = (args) => {
  const [page, setPage] = useState(1)
  return <Pagination count={10} page={page} onChange={(_, p) => setPage(p)} />
}
