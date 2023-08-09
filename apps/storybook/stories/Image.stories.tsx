import { Image } from '@committed/ds/src/components/Image'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
}
export default meta

export const Default: StoryObj<typeof Image> = {
  args: {
    src: 'https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80',
    alt: 'Photo by Damian Markutt @wildandfree_photography',
  },
}
