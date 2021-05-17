import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tooltip } from '.'
import { Button, Box, Flex } from '../../'
import { Check } from '../Icons'
import { usePortalled } from '../../docs/util'

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

/**
 * By default the tooltip is rendered using a react portal. However, this can cause issues. For example, in storybook rendering with a portal puts the tooltip outside of the theme decorator so portalled tooltip remain in the light theme.
 * If we switch to un-portalled, then they are rendered inside the them decorator but due to storybook again they may not appear in the right place in the docs.
 *
 * You can toggle the portalled state in the toolbar to see how they function in the docs and canvas, but in most situations they should work correctly with the default.
 */
export const Portalled: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Tooltip content={`Portalled ${portalled}`} portalled={portalled}>
      <Button>
        <Check />
      </Button>
    </Tooltip>
  )
}

/** The `open` state can be controlled, or you can start a tooltip open then it behaves normally using `defaultOpen`  */
export const Open: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <>
      <Tooltip open={true} content="OK" portalled={portalled}>
        <Button>Open</Button>
      </Tooltip>
      <Tooltip defaultOpen content="OK" portalled={portalled}>
        <Button css={{ ml: '$3' }}>DefaultOpen</Button>
      </Tooltip>
    </>
  )
}

export const Placement: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <>
      <Flex css={{ justifyContent: 'center', mt: '$4' }}>
        <Tooltip
          content="Tooltip"
          portalled={portalled}
          side="top"
          align="start"
        >
          <Button css={{ m: '$2' }}>top-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" portalled={portalled} side="top">
          <Button css={{ m: '$2' }}>top</Button>
        </Tooltip>
        <Tooltip content="Tooltip" portalled={portalled} side="top" align="end">
          <Button css={{ m: '$2' }}>top-end</Button>
        </Tooltip>
      </Flex>
      <Flex css={{ justifyContent: 'center' }}>
        <Flex css={{ alignItems: 'flex-start', flexDirection: 'column' }}>
          <Tooltip
            content="Tooltip"
            portalled={portalled}
            side="left"
            align="start"
          >
            <Button css={{ m: '$2' }}>left-start</Button>
          </Tooltip>
          <Tooltip content="Tooltip" portalled={portalled} side="left">
            <Button css={{ m: '$2' }}>left</Button>
          </Tooltip>
          <Tooltip
            content="Tooltip"
            portalled={portalled}
            side="left"
            align="end"
          >
            <Button css={{ m: '$2' }}>left-end</Button>
          </Tooltip>
        </Flex>
        <Box css={{ width: 200 }} />
        <Flex css={{ alignItems: 'flex-end', flexDirection: 'column' }}>
          <Tooltip
            content="Tooltip"
            portalled={portalled}
            side="right"
            align="start"
          >
            <Button css={{ m: '$2' }}>right-start</Button>
          </Tooltip>
          <Tooltip content="Tooltip" portalled={portalled} side="right">
            <Button css={{ m: '$2' }}>right</Button>
          </Tooltip>
          <Tooltip
            content="Tooltip"
            portalled={portalled}
            side="right"
            align="end"
          >
            <Button css={{ m: '$2' }}>right-end</Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex css={{ justifyContent: 'center' }}>
        <Tooltip
          content="Tooltip"
          portalled={portalled}
          side="bottom"
          align="start"
        >
          <Button css={{ m: '$2' }}>bottom-start</Button>
        </Tooltip>
        <Tooltip content="Tooltip" portalled={portalled} side="bottom">
          <Button css={{ m: '$2' }}>bottom</Button>
        </Tooltip>
        <Tooltip
          content="Tooltip"
          portalled={portalled}
          side="bottom"
          align="end"
        >
          <Button css={{ m: '$2' }}>bottom-end</Button>
        </Tooltip>
      </Flex>
    </>
  )
}

/**
 * Add `multiline` to wrap longer messages.
 */
export const Multiline: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Tooltip
      multiline
      content="This is a long tooltip so the width needs to be limited by adding the multiline prop. OK"
      portalled={portalled}
    >
      <Button>
        <Check />
      </Button>
    </Tooltip>
  )
}
