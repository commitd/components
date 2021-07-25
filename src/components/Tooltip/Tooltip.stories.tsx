import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tooltip } from '.'
import { Button, Box, Flex } from '../../'
import { Check } from '../Icons'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [],
} as Meta

export const Default = () => (
  <Tooltip content="OK">
    <Button>
      <Check />
    </Button>
  </Tooltip>
)

/** The `open` state can be controlled, or you can start a tooltip open then it behaves normally using `defaultOpen`  */
export const Open = () => (
  <>
    <Tooltip open={true} content="OK">
      <Button>Open</Button>
    </Tooltip>
    <Tooltip defaultOpen content="OK">
      <Button css={{ ml: '$3' }}>DefaultOpen</Button>
    </Tooltip>
  </>
)

export const Placement = () => (
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
export const Multiline = () => (
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
 * By default the tooltip is rendered using a react portal. However, this can cause issues in rare circumstances.
 *
 * You can turn off the use of portals with the `portalled` prop, but in most situations they should work correctly with the default.
 */
export const Portalled = () => (
  <Tooltip content="Portalled" portalled>
    <Button>
      <Check />
    </Button>
  </Tooltip>
)
