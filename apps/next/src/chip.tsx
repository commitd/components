'use client'

import { Chip, Inline, useToast } from '@committed/ds'

export const ChipExample = () => {
  const { addToast } = useToast()
  return (
    <Inline>
      <Chip>Chip</Chip>
      <Chip colorPalette="$primary">Chip</Chip>
      <Chip
        colorPalette="$success"
        onClick={() => addToast({ title: 'clicked', close: false })}
      >
        Chip
      </Chip>
      <Chip
        colorPalette="$error"
        closable
        onClick={() => addToast({ title: 'clicked', close: false })}
      >
        Chip
      </Chip>
    </Inline>
  )
}
