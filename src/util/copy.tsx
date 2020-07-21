import React, { useState } from 'react'
import { Box, Tooltip, BoxProps } from '../components'

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export type CopyProps = BoxProps & {
  title: string
  placement?: 'top' | 'bottom'
}

export const Copy = ({ title, placement, children, ...others }: CopyProps) => {
  const [copied, setCopied] = useState(false)

  return (
    <Tooltip
      key={`${name}`}
      title={copied ? 'Copied' : title}
      placement={placement}
      onClose={() => setCopied(false)}
    >
      <Box
        {...others}
        onClick={() => {
          copyToClipboard(title)
          setCopied(true)
        }}
      >
        {children}
      </Box>
    </Tooltip>
  )
}
