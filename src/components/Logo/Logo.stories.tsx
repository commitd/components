import React, { ComponentProps, FC } from 'react'
import { Story, Meta } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta

export const Default: Story<ComponentProps<typeof Logo>> = (args) => (
  <Logo {...args} />
)

/** Logo supports the standard `css` props so size can be controlled there.  */
export const Sizes: FC = () => (
  <>
    <Logo css={{ size: 512 }} />
    <Logo />
    <Logo css={{ size: '$7' }} />
    <Logo css={{ size: '$6' }} />
    <Logo css={{ size: '$5' }} />
    <Logo css={{ size: '$4' }} />
  </>
)
