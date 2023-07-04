import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Overlay } from '.'
import { css } from '../../../styled-system/css'

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
}
export default meta

export const Default: StoryObj<typeof Overlay> = {
  render: (args) => (
    <Overlay className={css({ height: '200px', width: '100%' })} {...args} />
  ),
}
