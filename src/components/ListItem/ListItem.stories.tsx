import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ListItem, ListItemProps } from '.'

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as Meta

export const Default: React.FC = () => {
  return <ListItem />
}

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />

export const Primary = Template.bind({})
Primary.args = {}
