import { Meta, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Box } from '.'
import { css } from '../../../styled-system/css'

const meta: Meta<typeof Box & { container?: 'block' | 'flex' }> = {
  title: 'Components/Box',
  component: Box,
}
export default meta
type Story = StoryObj<typeof Box>

export const Default: StoryObj<
  { container?: 'block' | 'flex' } & ComponentProps<typeof Box>
> = {
  argTypes: {
    container: {
      control: {
        type: 'select',
      },
      options: ['flex', 'block'],
      defaultValue: 'block',
      description:
        'Change the display type of the container to see the effect on the variants of the box.',
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['grow', 'max', 'high', 'wide', 'fullscreen'],
      description:
        'Some commonly styles are provided as variants for convenience (and improved performance).',
    },
  },
  render: ({ container, ...args }) => (
    <Box
      css={{
        display: container,
        backgroundColor: 'default',
        border: 'token(colors.grey3) solid token(sizes.2)',
        width: '100%',
        height: '300px',
      }}
    >
      <Box
        {...args}
        css={{
          backgroundColor: 'paper',
          color: 'text',
          border: 'token(colors.grey7) solid token(sizes.2)',
          padding: 4,
        }}
      >
        Box
      </Box>
    </Box>
  ),
}

export const Primary: Story = { args: { children: 'Example' } }

export const Padding: Story = {
  args: {
    children: 'Padding of space.4 (16px)',
    className: css({
      p: 4,
      border: 'solid token(sizes.1)',
    }),
  },
}

export const Margin: Story = {
  args: {
    children: 'Margin of space.3 (12px)',
    className: css({
      m: 3,
      border: 'solid token(sizes.1)',
    }),
  },
}

export const Colors: Story = {
  args: {
    children: 'Access to theme colors',
    className: css({
      m: 3,
      p: 2,
      border: 'solid token(sizes.1)',
      backgroundColor: 'primary',
      color: 'primaryContrast',
    }),
  },
}

export const Responsive: Story = {
  args: {
    children: 'Responsive',
    className: css({
      backgroundColor: 'error6',
      sm: {
        backgroundColor: 'brandYellow6',
      },
      md: {
        backgroundColor: 'info6',
      },
      lg: {
        backgroundColor: 'warning6',
      },
      xl: {
        backgroundColor: 'success6',
      },
      m: 3,
      p: 2,
      border: 'solid token(sizes.1)',
    }),
  },
}

export const As: Story = {
  args: {
    as: 'article',
    children: 'As article',
  },
}
