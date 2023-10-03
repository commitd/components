import { Background, surfaces } from '@committed/ds'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Variants } from './utils'
import { ZigZag } from './utils/ZigZag'

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

export const Surfaces: StoryFn = () => {
  return (
    <ZigZag>
      <Variants
        gridCss={{
          gridTemplateColumns: '1fr',
          padding: '$4',
          width: '100%',
        }}
        css={{
          height: '100px',
        }}
        component={Background}
        surface={surfaces}
      />
    </ZigZag>
  )
}
