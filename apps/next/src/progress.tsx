'use client'

import { Progress, Slider, Stack } from '@committed/ds'
import { useState } from 'react'

export const ProgressExample = () => {
  const [value, setValue] = useState([10])
  return (
    <Stack>
      <Progress />
      <Progress value={value[0]} />
      <Progress colorPalette="$neutral" value={value[0]} />
      <Progress colorPalette="$primary" value={value[0]} />
      <Progress colorPalette="$secondary" value={value[0]} />
      <Progress colorPalette="$success" value={value[0]} />
      <Progress colorPalette="$error" value={value[0]} />
      <Progress colorPalette="$info" value={value[0]} />
      <Slider css={{ mt: '$6' }} value={value} onValueChange={setValue} />
    </Stack>
  )
}
