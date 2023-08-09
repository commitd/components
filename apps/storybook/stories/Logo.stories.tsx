import { Logo } from '@committed/ds'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta

export const Default: StoryObj<typeof Logo> = {}

/** Logo supports the standard `css` props so size can be controlled there.  */
export const Sizes: StoryFn = () => (
  <>
    <Logo size={'$14'} />
    <Logo />
    <Logo size={'$7'} />
    <Logo size={'$6'} />
    <Logo size={'$5'} />
    <Logo size={'$4'} />
  </>
)
