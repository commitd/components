import { Svg, Toggle } from '@committed/ds'
import { mdiFormatItalic } from '@mdi/js'

export const ToggleExample = () => (
  <Toggle aria-label="Toggle italic">
    <Svg path={mdiFormatItalic} />
  </Toggle>
)
