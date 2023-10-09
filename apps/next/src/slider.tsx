import { Slider, Stack } from '@committed/ds'

export const SliderExample = () => (
  <Stack spacing="large">
    <Slider />
    <Slider colorPalette="$primary" />
    <Slider colorPalette="$secondary" />
    <Slider disabled colorPalette="$secondary" value={[50]} />
    <Slider defaultValue={[25, 75]} colorPalette="$primary" />
    <Slider defaultValue={[10, 50, 90]} colorPalette="$secondary" />
  </Stack>
)
