import { Box, Column, Flex, Row } from '@committed/ds'
import { css, token } from '@committed/ss'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { CSSProperties, ComponentProps } from 'react'

export default {
  title: 'Components/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>

type Story = StoryObj<typeof Flex>

export const Default: StoryFn = () => (
  <Flex>
    <Box
      css={{
        p: '$3',
        backgroundColor: '$success',
        color: '$success.text.contrast',
      }}
    >
      Box
    </Box>
    <Box
      css={{
        p: '$3',
        backgroundColor: '$warn',
        color: '$warn.text.contrast',
      }}
    >
      Box
    </Box>
    <Box
      css={{
        p: '$3',
        backgroundColor: '$error',
        color: '$error.text.contrast',
      }}
    >
      Box
    </Box>
  </Flex>
)

const Utils: StoryObj<
  ComponentProps<typeof Flex> & {
    box1: CSSProperties
    box2: CSSProperties
    box3?: CSSProperties
  }
> = {
  render: ({ box1 = {}, box2 = {}, box3, ...args }) => (
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
          }}
          style={box1}
        />
        <Box
          css={{
            size: '$5',
            backgroundColor: '$warn',
          }}
          style={box2}
        />
        <Box
          css={{
            size: '$5',
            backgroundColor: '$error',
          }}
          style={box3}
        />
      </Flex>
    </Box>
  ),
}

export const Gap = {
  ...Utils,
  args: {
    gap: true,
  },
}

export const Wrap = {
  ...Utils,
  args: {
    wrap: true,
    box1: {
      width: token('sizes.$6'),
    },
    box2: {
      width: token('sizes.$7'),
    },
    box3: {
      width: token('sizes.$8'),
    },
  },
}

export const Centered = {
  ...Utils,
  args: {
    centered: true,
    box1: {
      height: token('sizes.$7'),
    },
    box2: {
      height: token('sizes.$9'),
    },
    box3: {
      height: token('sizes.$6'),
    },
  },
}

export const Spaced = {
  ...Utils,
  args: {
    spaced: true,
  },
}

const FlexStory = {
  render: ({ box1 = {}, box2 = {}, box3, ...args }) => (
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
          }}
          style={box1}
        />
        <Box
          css={{
            size: '$5',
            backgroundColor: '$warn',
          }}
          style={box2}
        />
        <Box
          css={{
            size: '$5',
            backgroundColor: '$error',
          }}
          style={box3}
        />
      </Flex>
    </Box>
  ),
}

export const JustifyFlexStart = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'flex-start',
  }),
}

export const JustifyFlexEnd = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'flex-end',
  }),
}

export const JustifyCenterEnd = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
  }),
}

export const JustifySpaceBetween = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'space-between',
  }),
}

export const JustifySpaceAround = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'space-around',
  }),
}

export const AlignFlexStart = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'flex-start',
  }),
}

export const AlignFlexEnd = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'flex-end',
  }),
}

export const AlignCenter = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'center',
  }),
}

export const AlignStretch = {
  ...FlexStory,
  args: css.raw({
    justifyContent: 'center',
    alignItems: 'stretch',
  }),
}

export const AlignBaseline = {
  ...FlexStory,
  args: {
    ...css.raw({
      justifyContent: 'center',
      alignItems: 'baseline',
    }),
    box1: {
      height: token('sizes.$7'),
    },
    box2: {
      height: token('sizes.$9'),
    },
    box3: {
      height: token('sizes.$6'),
    },
  },
}

/**
 * For convenience we also export `Row` and `Column` components as aliases for `flexDirection="row"` and `flexDirection="column"`.
 */
export const FlexRow: StoryFn = () => (
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
          backgroundColor: '$warn',
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

export const FlexColumn: StoryFn = () => (
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
          backgroundColor: '$warn',
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
