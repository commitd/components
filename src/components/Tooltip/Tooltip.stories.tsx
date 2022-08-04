import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Tooltip, TooltipProvider } from '.'
import { Box, Button, Flex, Row } from '../../'
import { Check } from '../Icons'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: {
    TooltipProvider,
  },
  decorators: [],
  excludeStories: ['TooltipProvider'],
} as Meta

export const Default: Story = () => (
  <Tooltip content="OK">
    <Button>
      <Check />
    </Button>
  </Tooltip>
)

/** The `open` state can be controlled, or you can start a tooltip open then it behaves normally using `defaultOpen`  */
export const Open: Story = () => (
  <Row gap>
    <Tooltip open={true} content="OK">
      <Button>Open</Button>
    </Tooltip>
    <Tooltip defaultOpen content="OK">
      <Button>DefaultOpen</Button>
    </Tooltip>
  </Row>
)

export const Placement: Story = () => (
  <>
    <Flex css={{ justifyContent: 'center', mt: '$4' }}>
      <Tooltip content="Tooltip" side="top" align="start">
        <Button css={{ m: '$2' }}>top-start</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="top">
        <Button css={{ m: '$2' }}>top</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="top" align="end">
        <Button css={{ m: '$2' }}>top-end</Button>
      </Tooltip>
    </Flex>
    <Flex css={{ justifyContent: 'center' }}>
      <Flex css={{ alignItems: 'flex-start', flexDirection: 'column' }}>
        <Tooltip content="Tooltip" side="left" align="start">
          <Button css={{ m: '$2' }}>left-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="left">
          <Button css={{ m: '$2' }}>left</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="left" align="end">
          <Button css={{ m: '$2' }}>left-end</Button>
        </Tooltip>
      </Flex>
      <Box css={{ width: 200 }} />
      <Flex css={{ alignItems: 'flex-end', flexDirection: 'column' }}>
        <Tooltip content="Tooltip" side="right" align="start">
          <Button css={{ m: '$2' }}>right-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="right">
          <Button css={{ m: '$2' }}>right</Button>
        </Tooltip>
        <Tooltip content="Tooltip" side="right" align="end">
          <Button css={{ m: '$2' }}>right-end</Button>
        </Tooltip>
      </Flex>
    </Flex>
    <Flex css={{ justifyContent: 'center' }}>
      <Tooltip content="Tooltip" side="bottom" align="start">
        <Button css={{ m: '$2' }}>bottom-start</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom">
        <Button css={{ m: '$2' }}>bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip" side="bottom" align="end">
        <Button css={{ m: '$2' }}>bottom-end</Button>
      </Tooltip>
    </Flex>
  </>
)

/**
 * Add `multiline` to wrap longer messages.
 */
export const Multiline: Story = () => (
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
export const Delay: Story = () => (
  <>
    <TooltipProvider skipDelayDuration={0}>
      <Tooltip delayDuration={500} content="OK">
        <Button>Delay 500ms</Button>
      </Tooltip>
      <Tooltip delayDuration={2000} content="OK">
        <Button css={{ ml: '$3' }}>Delay 2s</Button>
      </Tooltip>
    </TooltipProvider>
  </>
)

/**
 * By default the tooltip is rendered using a react portal. However, this can cause issues in rare circumstances.
 *
 * You can turn off the use of portals with the `portalled` prop, but in most situations they should work correctly with the default.
 */
export const Portalled: Story = () => (
  <Row gap>
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
  </Row>
)

/**
 * Global options for tooltip can be provided using the `TooltipProvider`.
 * The provider is not required.
 *
 * It is also contained in the general `ThemeProvider` with it's props exposed.
 * The delayDuration can still be overridden for particular tooltips.
 *
 */
export const Provider: Story = () => (
  <TooltipProvider delayDuration={1000} skipDelayDuration={100}>
    <Tooltip content="OK">
      <Button css={{ mr: '$3' }}>Delay 1s</Button>
    </Tooltip>
    <Tooltip delayDuration={50} content="OK">
      <Button>Delay 50ms</Button>
    </Tooltip>
  </TooltipProvider>
)
