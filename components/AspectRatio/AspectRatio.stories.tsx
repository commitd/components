import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { AspectRatio } from '.'
import { Box } from '../Box'
import { Card, CardBody, CardHeading, CardSubheading } from '../Card'
import { Image } from '../Image'
import { Inline } from '../Inline'
import { Label } from '../Label'
import { Slider } from '../Slider'
import { Stack } from '../Stack'

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
}
export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: ({ ratio = 9 / 16, ...args }) => (
    <Card css={{ width: '50%' }}>
      <CardHeading>Photo by Damian Markutt</CardHeading>
      <CardSubheading>@wildandfree_photography</CardSubheading>
      <CardBody>
        {/* ratio={ 9 / 16} */}
        <AspectRatio ratio={ratio} {...args}>
          <Image
            src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
            alt="Photo by Damian Markutt @wildandfree_photography"
          />
        </AspectRatio>
      </CardBody>
    </Card>
  ),
}

/**
 * The ratio can be entered as a numerator and denominator to give comm0n values like `16 / 9`.
 */
export const Dynamic: Story = {
  render: () => {
    const [numerator, setNumerator] = useState([9])
    const [denominator, setDenominator] = useState([16])

    return (
      <Inline>
        <Box variant="wide">
          <Stack>
            <Label>
              Numerator
              <Slider value={numerator} onValueChange={setNumerator} />
            </Label>
            <Label>
              Denominator
              <Slider value={denominator} onValueChange={setDenominator} />
            </Label>
          </Stack>
        </Box>
        <Card css={{ width: '50%' }}>
          <CardHeading>Photo by Damian Markutt</CardHeading>
          <CardSubheading>@wildandfree_photography</CardSubheading>
          <CardBody>
            <AspectRatio ratio={numerator[0] / denominator[0]}>
              <Image
                src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
                alt="Photo by Damian Markutt @wildandfree_photography"
              />
            </AspectRatio>
          </CardBody>
        </Card>
      </Inline>
    )
  },
}
