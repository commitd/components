import React, { useState } from 'react'
import { Box, Tooltip, BoxProps } from '../../src'

export const copyToClipboard = (text: string) => {
  console.log('Copied to clipboard:', text)
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
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
