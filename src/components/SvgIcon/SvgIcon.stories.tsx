import React, { useState, FC } from 'react'
import { Meta } from '@storybook/react'
import * as Icons from '../Icons'
import { SvgIcon } from '.'
import { Flex, Box, Button as IconButton } from '..'

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export type CopyProps = {
  title: string
  placement?: 'top' | 'bottom'
}

const Copy: FC<CopyProps> = ({ title, placement, children, ...others }) => {
  const [copied, setCopied] = useState(false)

  return (
    // <Tooltip
    //   title={copied ? 'Copied' : title}
    //   placement={placement}
    //   onClose={() => setCopied(false)}
    // >
    <Box
      {...others}
      onClick={() => {
        copyToClipboard(title)
        setCopied(true)
      }}
    >
      {children}
    </Box>
    // </Tooltip>
  )
}

export default {
  title: 'Components/Icons',
  component: SvgIcon,
} as Meta

export const Default: React.FC = () => {
  const icons = Object.keys(Icons).filter((name) => /[A-Z]/.test(name[0]))
  return (
    <Flex css={{ flexWrap: 'wrap' }}>
      {icons.map((key) => {
        return (
          <Copy key={key} title={key}>
            {React.createElement((Icons as Record<string, React.FC>)[key])}
          </Copy>
        )
      })}
    </Flex>
  )
}
