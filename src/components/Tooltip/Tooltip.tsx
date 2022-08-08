import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip'
import React, { ComponentProps, FC, ReactElement, ReactNode } from 'react'
import { css, styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { Text } from '../Text'

type TooltipProps = ComponentProps<typeof Root> &
  ComponentProps<typeof Content> & {
    children: ReactElement
    content: ReactNode
    multiline?: boolean
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const tooltipContentStyles = css({
  backgroundColor: '$tooltip',
  color: '$textTooltip',
  borderRadius: '$default',
  padding: '$1 $2',
  boxShadow: '$3',
  outline: 'none',

  variants: {
    multiline: {
      true: {
        maxWidth: '$12',
        paddingBottom: '$3',
      },
    },
  },
})

export const tooltipArrowStyles = css({
  fill: '$tooltip',
  boxShadow: '$3',
})

const StyledContent = styled(Content, tooltipContentStyles)
const StyledArrow = styled(Arrow, tooltipArrowStyles)
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
  onOpenChange,
  multiline,
  container,
  portalled = true,
  side = 'top',
  align = 'center',
  ...props
}) => (
  <Root
    open={open}
    defaultOpen={defaultOpen}
    delayDuration={delayDuration}
    onOpenChange={onOpenChange}
  >
    <Trigger asChild>{children}</Trigger>
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
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
    </ConditionalWrapper>
  </Root>
)

export const TooltipProvider = Provider
