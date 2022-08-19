import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Image } from '.'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta

export const Default: Story<ComponentProps<typeof Image>> = ({
  src = 'https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80',
  alt = 'Photo by Damian Markutt @wildandfree_photography',
  ...args
}) => <Image src={src} alt={alt} {...args} />
