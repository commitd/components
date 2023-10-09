import { Input, Stack } from '@committed/ds'

export const InputExample = () => (
  <Stack>
    <Input id="username" label="Username" required />
    <Input id="firstname" label="First name" />
    <Input id="familyname" label="Family name" required={false} />
  </Stack>
)
