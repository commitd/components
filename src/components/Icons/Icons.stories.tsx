import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Flex, SvgIcon } from '..'
import { Copy, usePortalled } from '../../docs/util'
import * as Icons from './'

export default {
  title: 'Components/Icons',
  component: SvgIcon,
} as Meta

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
