import React, { useState, FC } from 'react'
import { Meta } from '@storybook/react'
import * as Icons from '../Icons'
import { SvgIcon } from '.'
import { Flex, Button as IconButton } from '..'
import { Copy, usePortalled } from '../../docs/util'

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
