import { Background } from '@committed/ds'
import { styled } from '@committed/ss/jsx'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof Background> = {
  title: 'Components/Background',
  component: Background,
}
export default meta

type Story = StoryObj<typeof Background>

export const Default: Story = {
  render: (args) => (
    <Background
      {...args}
      css={{
        width: '100%',
        height: '200px',
      }}
    />
  ),
}

export const BackgroundColor: StoryFn = () => (
  <Background
    backgroundColor="$info"
    css={{
      width: '100%',
      height: '200px',
    }}
  />
)

export const SurfaceNeutral: StoryFn = () => (
  <Background
    surface="neutral"
    css={{
      width: '100%',
      height: '200px',
    }}
  />
)

export const SurfaceSolid: StoryFn = () => (
  <Background
    surface="solid"
    css={{
      width: '100%',
      height: '200px',
    }}
  />
)

export const SurfaceGlass: StoryFn = () => (
  <Background
    surface="glass"
    css={{
      width: '100%',
      height: '200px',
    }}
  />
)

export const SurfaceTransparent: StoryFn = () => (
  <Background
    surface="transparent"
    css={{
      width: '100%',
      height: '200px',
    }}
  />
)

export const SurfaceCss: StoryFn = () => (
  <styled.div
    css={{
      surface: 'solid',
      width: '100%',
      height: '200px',
    }}
  />
)
