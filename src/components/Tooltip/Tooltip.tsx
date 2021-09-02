import { Slot } from '@radix-ui/react-slot'
import { Arrow, Content, Root, Trigger } from '@radix-ui/react-tooltip'
import React, { FC } from 'react'
import { styled } from '../../stitches.config'
import { Text } from '../Text'

type TooltipProps = React.ComponentProps<typeof Root> &
  React.ComponentProps<typeof Content> & {
    children: React.ReactElement
    content: React.ReactNode
    multiline?: boolean
  }

const StyledContent = styled(Content, {
  backgroundColor: '$tooltip',
  color: '$textTooltip',
  borderRadius: '$default',
  padding: '$1 $2',
  boxShadow: '$3',

  variants: {
    multiline: {
      true: {
        maxWidth: '$12',
        paddingBottom: '$3',
      },
    },
  },
})

const StyledArrow = styled(Arrow, {
  fill: '$tooltip',
  boxShadow: '$3',
})
/**
 *
 * Tooltips display extra information when users hover over, focus on, or tap an element.
 *
 * When activated, Tooltips display a text label identifying an element, such as a description of its function.
 *
 * Built using [Radix Tooltip](https://radix-ui.com/primitives/docs/components/tooltip)
 */
export const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  open,
  defaultOpen,
  delayDuration,
  skipDelayDuration,
  onOpenChange,
  multiline,
  side = 'top',
  align = 'center',
  ...props
}) => (
  <Root
    open={open}
    defaultOpen={defaultOpen}
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    onOpenChange={onOpenChange}
  >
    <Trigger as={Slot}>{children}</Trigger>
    <StyledContent
      side={side}
      align={align}
      sideOffset={5}
      {...props}
      multiline={multiline}
    >
      <Text
        size="0"
        css={{
          lineHeight: multiline ? '20px' : undefined,
          color: 'inherit',
        }}
      >
        {content}
      </Text>
      <StyledArrow offset={5} width={11} height={5} />
    </StyledContent>
  </Root>
)
