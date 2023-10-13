import {
  Box,
  Button,
  Check,
  Flex,
  Inline,
  Margin,
  Tooltip,
  TooltipProvider,
} from '@committed/ds'
import { css } from '@committed/ds-ss'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: {
    TooltipProvider,
  },
  decorators: [],
  excludeStories: ['TooltipProvider'],
} satisfies Meta<typeof Tooltip>

export const Default: StoryFn = () => (
  <Tooltip content="OK">
    <Button>
      <Check />
    </Button>
  </Tooltip>
)

/** The `open` state can be controlled, or you can start a tooltip open then it behaves normally using `defaultOpen`  */
export const Open: StoryFn = () => (
  <Inline>
    <Tooltip open={true} content="OK">
      <Button>Open</Button>
    </Tooltip>
    <Tooltip defaultOpen content="OK">
      <Button>DefaultOpen</Button>
    </Tooltip>
  </Inline>
)

const withMargin = css({ m: '$2' })

export const Placement: StoryFn = () => (
  <>
    <Margin mt="$4">
      <Flex justifyContent="center">
        <Tooltip content="Tooltip" side="top" align="start">
          <Button className={withMargin}>top-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="top">
          <Button className={withMargin}>top</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="top" align="end">
          <Button className={withMargin}>top-end</Button>
        </Tooltip>
      </Flex>
    </Margin>
    <Flex justifyContent="center">
      <Flex alignItems="flex-start" flexDirection="column">
        <Tooltip content="Tooltip" side="left" align="start">
          <Button className={withMargin}>left-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="left">
          <Button className={withMargin}>left</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="left" align="end">
          <Button className={withMargin}>left-end</Button>
        </Tooltip>
      </Flex>
      <Box width={'200px'} />
      <Flex alignItems="flex-end" flexDirection="column">
        <Tooltip content="Tooltip" side="right" align="start">
          <Button className={withMargin}>right-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="right">
          <Button className={withMargin}>right</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="right" align="end">
          <Button className={withMargin}>right-end</Button>
        </Tooltip>
      </Flex>
    </Flex>
    <Flex justifyContent="center">
      <Tooltip content="Tooltip" side="bottom" align="start">
        <Button className={withMargin}>bottom-start</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom">
        <Button className={withMargin}>bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom" align="end">
        <Button className={withMargin}>bottom-end</Button>
      </Tooltip>
    </Flex>
  </>
)

/**
 * Add `multiline` to wrap longer messages.
 */
export const Multiline: StoryFn = () => (
  <Tooltip
    multiline
    content="This is a long tooltip so the width needs to be limited by adding the multiline prop. OK"
  >
    <Button>
      <Check />
    </Button>
  </Tooltip>
)

/**
 * The delay duration can be controlled
 *
 * - `delayDuration` - The duration from when the mouse enters the trigger until the tooltip opens.
 * - `skipDelayDuration` - Available on TooltipProvider - How much time a user has to enter another trigger without incurring a delay again.
 */
export const Delay: StoryFn = () => (
  <>
    <TooltipProvider skipDelayDuration={0}>
      <Tooltip delayDuration={500} content="OK">
        <Button className={withMargin}>Delay 500ms</Button>
      </Tooltip>
      <Tooltip delayDuration={2000} content="OK">
        <Button>Delay 2s</Button>
      </Tooltip>
    </TooltipProvider>
  </>
)

/**
 * By default the tooltip is rendered using a react portal. However, this can cause issues in rare circumstances.
 *
 * You can turn off the use of portals with the `portalled` prop, but in most situations they should work correctly with the default.
 */
export const Portalled: StoryFn = () => (
  <Inline>
    <Tooltip content="Portalled" portalled>
      <Button>
        <Check />
      </Button>
    </Tooltip>
    <Tooltip content="Not Portalled" portalled={false}>
      <Button>
        <Check />
      </Button>
    </Tooltip>
  </Inline>
)

/**
 * Global options for tooltip can be provided using the `TooltipProvider`.
 * The provider is not required.
 *
 * It is also contained in the general `ThemeProvider` with it's props exposed.
 * The delayDuration can still be overridden for particular tooltips.
 *
 */
export const Provider: StoryFn = () => (
  <TooltipProvider delayDuration={1000} skipDelayDuration={100}>
    <Tooltip content="OK">
      <Button className={withMargin}>Delay 1s</Button>
    </Tooltip>
    <Tooltip delayDuration={50} content="OK">
      <Button>Delay 50ms</Button>
    </Tooltip>
  </TooltipProvider>
)
