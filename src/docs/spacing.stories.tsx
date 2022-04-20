import { Story } from '@storybook/react'
import React from 'react'
import { Box, Column, Row, styled, Text } from '../'

export default {
  title: 'Design System/Spacing',
}

const CenteredRow = styled(Row, { alignItems: 'center' })
const Bar = styled(Box, {
  position: 'absolute',
  left: '$8',
  py: '$1',
  variants: {
    color: {
      1: { backgroundColor: '$brandYellow2' },
      2: { backgroundColor: '$brandYellow3' },
      3: { backgroundColor: '$brandYellow4' },
      4: { backgroundColor: '$brandYellow5' },
      5: { backgroundColor: '$brandYellow6' },
      6: { backgroundColor: '$brandYellow7' },
      7: { backgroundColor: '$brandYellow8' },
      8: { backgroundColor: '$brandYellow9' },
      9: { backgroundColor: '$brandYellow10' },
    },
    size: {
      0: { width: '$0' },
      1: { width: '$1' },
      2: { width: '$2' },
      3: { width: '$3' },
      4: { width: '$4' },
      5: { width: '$5' },
      6: { width: '$6' },
      7: { width: '$7' },
      8: { width: '$8' },
      9: { width: '$9' },
      10: { width: '$10' },
      11: { width: '$11' },
      12: { width: '$12' },
      13: { width: '$13' },
      14: { width: '$14' },
      15: { width: '$15' },
      16: { width: '$16' },
    },
  },
})

/**
 * Use the scale values for spacing and sizing where ever possible to create a more unified look.
 */
export const exampleSpacing: Story = () => (
  <Column>
    <CenteredRow>
      <Text>$0</Text>
      <Bar color={1} size={0} />
    </CenteredRow>
    <CenteredRow>
      <Text>$1</Text>
      <Bar color={1} size={1} />
    </CenteredRow>
    <CenteredRow>
      <Text>$2</Text>
      <Bar color={2} size={2} />
    </CenteredRow>
    <CenteredRow>
      <Text>$3</Text>
      <Bar color={2} size={3} />
    </CenteredRow>
    <CenteredRow>
      <Text>$4</Text>
      <Bar color={3} size={4} />
    </CenteredRow>
    <CenteredRow>
      <Text>$5</Text>
      <Bar color={3} size={5} />
    </CenteredRow>
    <CenteredRow>
      <Text>$6</Text>
      <Bar color={4} size={6} />
    </CenteredRow>
    <CenteredRow>
      <Text>$7</Text>
      <Bar color={4} size={7} />
    </CenteredRow>
    <CenteredRow>
      <Text>$8</Text>
      <Bar color={5} size={8} />
    </CenteredRow>
    <CenteredRow>
      <Text>$9</Text>
      <Bar color={5} size={9} />
    </CenteredRow>
    <CenteredRow>
      <Text>$10</Text>
      <Bar color={6} size={10} />
    </CenteredRow>
    <CenteredRow>
      <Text>$11</Text>
      <Bar color={6} size={11} />
    </CenteredRow>
    <CenteredRow>
      <Text>$12</Text>
      <Bar color={7} size={12} />
    </CenteredRow>
    <CenteredRow>
      <Text>$13</Text>
      <Bar color={7} size={13} />
    </CenteredRow>
    <CenteredRow>
      <Text>$14</Text>
      <Bar color={8} size={14} />
    </CenteredRow>
    <CenteredRow>
      <Text>$15</Text>
      <Bar color={8} size={15} />
    </CenteredRow>
    <CenteredRow>
      <Text>$16</Text>
      <Bar color={9} size={16} />
    </CenteredRow>
  </Column>
)
