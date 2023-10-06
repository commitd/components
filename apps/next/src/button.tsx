import { Button, Inline, Stack } from '@committed/ds'

export const ButtonExample = () => (
  <Stack spacing="small">
    <Inline>
      <Button variant="solid">solid</Button>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
    </Inline>
    <Inline>
      <Button size="small">Small</Button>
      <Button size="default">Default</Button>
      <Button size="large">Large</Button>
    </Inline>
  </Stack>
)
