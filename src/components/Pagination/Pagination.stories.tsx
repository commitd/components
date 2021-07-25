import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Pagination } from '.'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta

export const Default: Story = (args) => <Pagination count={10} {...args} />

export const Controlled: Story = (args) => {
  const [page, setPage] = useState(1)
  return <Pagination count={10} page={page} onPageChange={setPage} {...args} />
}

export const ManyPages: Story = () => <Pagination count={100} page={75} />
