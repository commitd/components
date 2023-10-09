import { Button, Inline, Stack } from '@committed/ds'

export const ButtonExample = () => (
  <Stack spacing="small">
    <Inline>
      <Button variant="solid">solid</Button>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
    </Inline>
    <Inline>
      <Button variant="solid" size="small">
        Small
      </Button>
      <Button variant="solid" size="default">
        Default
      </Button>
      <Button variant="solid" size="large">
        Large
      </Button>
    </Inline>
  </Stack>
)
