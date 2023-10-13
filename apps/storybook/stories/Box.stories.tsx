import { Box } from '@committed/ds'
import { css, cx } from '@committed/ds-ss'
import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'

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
      className={cx(
        'wrapper',
        css({
          backgroundColor: '$default',
          border: 'token(colors.$neutral.3) solid token(sizes.$2)',
          width: '100%',
          height: '300px',
        }),
      )}
      style={{
        display: container,
      }}
    >
      <Box
        className={css({
          backgroundColor: '$surface.solid',
          color: '$text',
          border: 'token(colors.$neutral.7) solid token(sizes.$2)',
          padding: 4,
        })}
        {...args}
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
      p: '$4',
      border: 'solid token(sizes.$1)',
    }),
  },
}

export const Margin: Story = {
  args: {
    children: 'Margin of space.3 (12px)',
    className: css({
      m: '$3',
      border: 'solid token(sizes.$1)',
    }),
  },
}

export const Colors: Story = {
  args: {
    children: 'Access to theme colors',
    className: css({
      m: '$3',
      p: '$2',
      border: 'solid token(sizes.$1)',
      backgroundColor: '$primary',
      color: '$primaryContrast',
    }),
  },
}

export const Responsive: Story = {
  args: {
    children: 'Responsive',
    className: css({
      backgroundColor: {
        base: '$error.bg',
        sm: '$primary.bg',
        md: '$info.bg',
        lg: '$warning.bg',
        xl: '$success.bg',
      },
      m: '$3',
      p: '$2',
      border: 'solid token(sizes.$1)',
    }),
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <article>As article</article>,
  },
}
