'use client'

import { Chip, Inline } from '@committed/ds'

export const ChipExample = () => (
  <Inline>
    <Chip>Chip</Chip>
    <Chip colorPalette="$primary">Chip</Chip>
    <Chip colorPalette="$success" onClick={() => alert('clicked')}>
      Chip
    </Chip>
    <Chip colorPalette="$error" closable onClick={() => alert('clicked')}>
      Chip
    </Chip>
  </Inline>
)
