import React, { useState, FC, ComponentProps } from 'react'
import { Box, Tooltip } from '../../'

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}
export type CopyProps = ComponentProps<typeof Tooltip> & {
  content: string
}

export const Copy: FC<CopyProps> = ({ css, content, children, ...others }) => {
  const [copied, setCopied] = useState(false)


  return (
  <Tooltip
    content={copied ? 'Copied' : content}
    onOpenChange={() => setCopied(false)}
    {...others}
    >
    <Box
      css={css}
        onClick={(e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
        copyToClipboard(content)
        setCopied(true)
      }}
      >{children}</Box>
  </Tooltip>
  )
}
