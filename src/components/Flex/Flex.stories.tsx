import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Flex, Row, Column } from '.'
import { Box } from '../'

export default {
  title: 'Components/Flex',
  component: Flex,
} as Meta

export const Default: React.FC = () => (
  <Flex>
    <Box
      css={{
        p: '$3',
        backgroundColor: '$success',
        color: '$successContrast',
      }}
    >
      Box
    </Box>
    <Box
      css={{
        p: '$3',
        backgroundColor: '$warning',
        color: '$warningContrast',
      }}
    >
      Box
    </Box>
    <Box
      css={{
        p: '$3',
        backgroundColor: '$error',
        color: '$errorContrast',
      }}
    >
      Box
    </Box>
  </Flex>
)

const Utils: Story = ({ box1 = {}, box2 = {}, box3, ...args }) => (
  <Box
    css={{
      size: '$10',
      border: 'solid',
    }}
  >
    <Flex {...args}>
      <Box
        css={{
          size: '$5',
          backgroundColor: '$success',
          ...box1,
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$warning',
          ...box2,
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$error',
          ...box3,
        }}
      />
    </Flex>
  </Box>
)

export const Gap = Utils.bind({})
Gap.args = {
  gap: true,
}

export const Wrap = Utils.bind({})
Wrap.args = {
  wrap: true,
  box1: {
    width: '$6',
  },
  box2: {
    width: '$7',
  },
  box3: {
    width: '$8',
  },
}

export const Centered = Utils.bind({})
Centered.args = {
  centered: true,
  box1: {
    height: '$7',
  },
  box2: {
    height: '$9',
  },
  box3: {
    height: '$6',
  },
}

export const Spaced = Utils.bind({})
Spaced.args = {
  spaced: true,
}

const Template: Story = ({ box1 = {}, box2 = {}, box3, ...args }) => (
  <Box
    css={{
      size: '$10',
      border: 'solid',
    }}
  >
    <Flex css={args}>
      <Box
        css={{
          size: '$5',
          backgroundColor: '$success',
          ...box1,
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$warning',
          ...box2,
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$error',
          ...box3,
        }}
      />
    </Flex>
  </Box>
)

export const JustifyFlexStart = Template.bind({})
JustifyFlexStart.args = {
  justifyContent: 'flex-start',
}

export const JustifyFlexEnd = Template.bind({})
JustifyFlexEnd.args = {
  justifyContent: 'flex-end',
}

export const JustifyCenterEnd = Template.bind({})
JustifyCenterEnd.args = {
  justifyContent: 'center',
}

export const JustifySpaceBetween = Template.bind({})
JustifySpaceBetween.args = {
  justifyContent: 'space-between',
}

export const JustifySpaceAround = Template.bind({})
JustifySpaceAround.args = {
  justifyContent: 'space-around',
}

export const AlignFlexStart = Template.bind({})
AlignFlexStart.args = {
  justifyContent: 'center',
  alignItems: 'flex-start',
}

export const AlignFlexEnd = Template.bind({})
AlignFlexEnd.args = {
  justifyContent: 'center',
  alignItems: 'flex-end',
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
  justifyContent: 'center',
  alignItems: 'center',
}

export const AlignStretch = Template.bind({})
AlignStretch.args = {
  justifyContent: 'center',
  alignItems: 'stretch',
}

export const AlignBaseline = Template.bind({})
AlignBaseline.args = {
  justifyContent: 'center',
  alignItems: 'baseline',
  box1: {
    height: '$7',
  },
  box2: {
    height: '$9',
  },
  box3: {
    height: '$6',
  },
}

/**
 * For convenience we also export `Row` and `Column` components as aliases for `flexDirection="row"` and `flexDirection="column"`.
 */
export const FlexRow: Story = () => (
  <Box
    css={{
      size: '$10',
      border: 'solid',
    }}
  >
    <Row>
      <Box
        css={{
          size: '$5',
          backgroundColor: '$success',
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$warning',
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$error',
        }}
      />
    </Row>
  </Box>
)

export const FlexColumn: Story = () => (
  <Box
    css={{
      size: '$10',
      border: 'solid',
    }}
  >
    <Column>
      <Box
        css={{
          size: '$5',
          backgroundColor: '$success',
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$warning',
        }}
      />
      <Box
        css={{
          size: '$5',
          backgroundColor: '$error',
        }}
      />
    </Column>
  </Box>
)
