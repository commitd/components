'use client'

import { Check, IconButton, Inline } from '@committed/ds'

export const IconButtonExample = () => (
  <>
    <Inline>
      <IconButton variant="solid">
        <Check />
      </IconButton>
      <IconButton variant="outline">
        <Check />
      </IconButton>
      <IconButton variant="text">
        <Check />
      </IconButton>
    </Inline>
    <Inline>
      <IconButton size="small">
        <Check />
      </IconButton>
      <IconButton>
        <Check />
      </IconButton>
      <IconButton size="large">
        <Check />
      </IconButton>
    </Inline>
  </>
)
