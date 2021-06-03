import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationItem } from '.'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  subcomponents: { PaginationItem },
} as Meta

const Template: Story = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = { count: 10 }
