import { Meta, Story } from '@storybook/react'
import React, { ComponentProps, useState } from 'react'
import { AspectRatio } from '.'
import { Box } from '../Box'
import { Card, CardBody, CardHeading, CardSubheading } from '../Card'
import { Row } from '../Flex'
import { Image } from '../Image'
import { Label } from '../Label'
import { Slider } from '../Slider'

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
} as Meta

export const Default: Story<ComponentProps<typeof AspectRatio>> = ({
  ratio = 9 / 16,
  ...args
}) => (
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
)

/**
 * The ratio can be entered as a numerator and denominator to give comm0n values like `16 / 9`.
 */
export const Dynamic: Story = () => {
  const [numerator, setNumerator] = useState([9])
  const [denominator, setDenominator] = useState([16])

  return (
    <Row>
      <Box variant="wide">
        <Label>Numerator</Label>
        <Slider value={numerator} onValueChange={setNumerator} />
        <Label>Denominator</Label>
        <Slider value={denominator} onValueChange={setDenominator} />
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
    </Row>
  )
}
