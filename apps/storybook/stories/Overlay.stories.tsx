import { Box, Overlay, surfaces } from '@committed/ds'
import { css } from '@committed/ds-ss'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Variants } from './utils'
import { ZigZag } from './utils/ZigZag'

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

export const Surfaces: StoryFn = () => {
  return (
    <Box css={{ height: '1100px' }}>
      <ZigZag>
        <Variants
          gridCss={{
            gridTemplateColumns: '1fr',
            padding: '$4',
          }}
          className={css({ height: '200px', width: '100%' })}
          component={Overlay}
          surface={surfaces}
        />
      </ZigZag>
    </Box>
  )
}
