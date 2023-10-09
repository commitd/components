import { Radio, RadioGroup } from '@committed/ds'

export const RadioExample = () => (
  <RadioGroup>
    <Radio variant="solid" value="mobx" label="Mobx" />
    <Radio variant="solid" value="redux" label="Redux" />
    <Radio variant="solid" value="context" label="Context" />
  </RadioGroup>
)
