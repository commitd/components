import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { css } from '../styled-system/css'

import { Panda } from './Panda'

const meta: Meta<typeof Panda> = {
  title: 'Example/Button',
  component: Panda,
  decorators: [
    (Story) => (
      <div className={css({ m: '0' })}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello 🐼!',
  },
}
