import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Flex, Svg } from '..'
import { Copy, usePortalled } from '../../docs/util'
import * as Icons from './'

export default {
  title: 'Components/Icons',
  // To get correct props
  component: Svg,
  parameters: {
    docs: {
      description: {
        component: `Icons below are provided. Click to copy the icon name. 

We recommend using setting up a project icons file to allow easy changing of all semantically equivalent icons. This will help to improve maintainability and reduce bundle size through tree shaking.`,
      },
    },
  },
} as Meta

/** Override description */
export const Default: Story = (_args, context) => {
  const portalled = usePortalled(context)
  const icons = Object.keys(Icons).filter((name) => /[A-Z]/.test(name[0]))
  return (
    <Flex css={{ flexWrap: 'wrap' }}>
      {icons.map((key) => {
        return (
          <Copy
            css={{ color: '$text' }}
            portalled={portalled}
            key={key}
            content={key}
          >
            {React.createElement((Icons as Record<string, React.FC>)[key])}
          </Copy>
        )
      })}
    </Flex>
  )
}
