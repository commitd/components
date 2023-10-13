'use client'

import {
  Background,
  SurfaceVariants,
  Svg,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
} from '@committed/ds'
import { mdiNote, mdiNoteOutline } from '@mdi/js'
import { createContext, useContext, useMemo, useState } from 'react'

const BackgroundContext = createContext(null)

export function BackgroundContextProvider({ children }) {
  const [background, setBackground] =
    useState<SurfaceVariants['surface']>('neutral')
  const contextValue = useMemo(() => [background, setBackground], [background])
  return (
    <BackgroundContext.Provider value={contextValue}>
      <Background asChild={false} surface={background}>
        {children}
      </Background>
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  const context = useContext(BackgroundContext)
  if (!context) {
    throw new Error(
      'useBackground must be used within a BackgroundContextProvider',
    )
  }
  return context
}

export const BackgroundSwitch = () => {
  const [background, setBackground] = useBackground()
  return (
    <Tooltip content="Set Background">
      <ToggleGroup
        colorPalette="$neutral"
        variant="text"
        type="single"
        value={background}
        onValueChange={setBackground}
        aria-label="Background"
        orientation="horizontal"
      >
        <ToggleGroupItem value="neutral" aria-label="neutral">
          <Svg path={mdiNoteOutline} />
        </ToggleGroupItem>
        <ToggleGroupItem value="solid" aria-label="solid">
          <Svg path={mdiNote} />
        </ToggleGroupItem>
      </ToggleGroup>
    </Tooltip>
  )
}
