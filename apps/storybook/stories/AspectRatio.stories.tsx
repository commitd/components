import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  CardHeading,
  CardSubheading,
  Image,
  Inline,
  Label,
  Slider,
  Stack,
} from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

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
      <CardContent>
        {/* ratio={ 9 / 16} */}
        <AspectRatio ratio={ratio} {...args}>
          <Image
            src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
            alt="Photo by Damian Markutt @wildandfree_photography"
          />
        </AspectRatio>
      </CardContent>
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
        <Card css={{ width: '50%', height: '50%', overflow: 'hidden' }}>
          <CardHeading>Photo by Damian Markutt</CardHeading>
          <CardSubheading>@wildandfree_photography</CardSubheading>
          <CardContent>
            <AspectRatio ratio={numerator[0] / denominator[0]}>
              <Image
                css={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
                alt="Photo by Damian Markutt @wildandfree_photography"
              />
            </AspectRatio>
          </CardContent>
        </Card>
      </Inline>
    )
  },
}
