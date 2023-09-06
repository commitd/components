import {
  Divider,
  Label,
  Pagination,
  PaginationProps,
  Radio,
  RadioGroup,
  Stack,
} from '@committed/ds'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta

const Template: StoryFn<PaginationProps> = (args) => {
  const [page, setPage] = useState(1)
  return <Pagination {...args} page={page} onPageChange={setPage} />
}

export const Default = Template.bind({})
Default.args = {
  totalPages: 10,
}

export const ManyPages = Template.bind({})
ManyPages.args = {
  totalPages: 100,
}

export const BoundaryCondition = Template.bind({})
BoundaryCondition.args = {
  totalPages: 14,
}

export const ChangePadding = Template.bind({})
ChangePadding.args = {
  totalPages: 20,
  boundaryCount: 3,
  siblingCount: 2,
}

export const LayoutOptions = Template.bind({})
LayoutOptions.args = {
  totalPages: 20,
  align: 'center',
  spacing: 'small',
}

export const Single: StoryFn<PaginationProps> = (args) => {
  const [single, setSingle] = useState('show')

  return (
    <Stack>
      <Label>Single Prop</Label>
      <RadioGroup
        orientation="horizontal"
        value={single}
        onValueChange={setSingle}
      >
        <Radio value="show" label="show" />
        <Radio value="hide" label="hide" />
        <Radio value="none" label="none" />
      </RadioGroup>
      <Divider />
      <Pagination
        totalPages={1}
        page={1}
        single={single as PaginationProps['single']}
      />
      <Divider />
    </Stack>
  )
}
