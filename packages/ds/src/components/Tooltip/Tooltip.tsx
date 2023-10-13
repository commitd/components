'use client'
import { css, cva, cx, styled } from '@committed/ss'
import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip'
import {
  CSSProperties,
  ComponentProps,
  FC,
  ReactElement,
  ReactNode,
} from 'react'
import { ConditionalWrapper, component } from '../../utils'
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

export const tooltipContentCva = cva({
  base: {
    backgroundColor: '$tooltip',
    color: '$text.tooltip',
    borderRadius: '$default',
    py: '$1',
    px: '$2',
    boxShadow: '$3',
    outline: 'none',
  },
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

const StyledContent = styled(Content, tooltipContentCva)
const StyledArrow = component(Arrow, tooltipArrowStyles)
/**
 *
 * Tooltips display extra information when users hover over, focus on, or tap an element.
 *
 * When activated, Tooltips display a text label identifying an element, such as a description of its function.
 *
 * Built using [Radix Tooltip](https://radix-ui.com/primitives/docs/components/tooltip)
 */
export const Tooltip: FC<TooltipProps> = ({
  className,
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
      props={{ container }}
      wrapper={Portal}
    >
      <StyledContent
        side={side}
        align={align}
        sideOffset={5}
        {...props}
        className={cx('c-tooltip', className)}
        multiline={multiline}
      >
        <Text
          size="$0"
          className={css({
            lineHeight: 'var(--tooltipLineHeight)',
            color: 'inherit',
          })}
          style={
            {
              '--tooltipLineHeight': multiline ? '20px' : 'unset',
            } as CSSProperties
          }
        >
          {content}
        </Text>
        <StyledArrow offset={5} width={11} height={5} />
      </StyledContent>
    </ConditionalWrapper>
  </Root>
)
Tooltip.displayName = 'Tooltip'

export const TooltipProvider = Provider
