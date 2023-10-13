import { useBoolean, useTimeout } from '@committed/hooks'
import { SystemStyleObject } from '@committed/ss'
import React, { ComponentProps, FC } from 'react'
import { handleErrors } from '../../utils/handleErrors'
import { Box } from '../Box'
import { Tooltip } from '../Tooltip'

const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text)
}
export type CopyProps = Omit<ComponentProps<typeof Tooltip>, 'children'> & {
  content: React.ReactNode
  children?: React.ReactNode
  copy?: string
  css?: SystemStyleObject
}

export const Copy: FC<CopyProps> = ({
  css,
  content,
  copy,
  children,
  ...others
}) => {
  const [open, { setTrue: setOpen, setFalse: close }] = useBoolean(false)
  const [copied, { setTrue: setCopied, setFalse: clearCopied }] =
    useBoolean(false)
  useTimeout(
    () => {
      close()
      clearCopied()
    },
    copied ? 2000 : null,
  )

  const handleOpenChange = (change: boolean) => {
    if (change) {
      setOpen()
    } else if (!copied) {
      close()
    }
  }

  return (
    <Tooltip
      open={open}
      content={copied ? `Copied ${copy || content} to clipboard` : content}
      onOpenChange={handleOpenChange}
      {...others}
    >
      <Box
        css={css}
        onClick={handleErrors(async (e) => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          await copyToClipboard(copy ?? `${content}`)
          setCopied()
          setOpen()
        })}
      >
        {children}
      </Box>
    </Tooltip>
  )
}
