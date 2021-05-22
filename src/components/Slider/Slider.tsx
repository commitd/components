import React from 'react'
import { styled } from 'stitches.config'
import * as RadixSlider from '@radix-ui/react-slider'

/**
 * Slider component
 */
export const StyledSlider = styled('div', {})

type StyledSliderProps = React.ComponentProps<typeof StyledSlider>
export type SliderProps = StyledSliderProps

export const Slider: React.FC<SliderProps> = () => (
  <StyledSlider>
    <RadixSlider.Root>
      <RadixSlider.Track>
        <RadixSlider.Range />
      </RadixSlider.Track>
      <RadixSlider.Thumb />
    </RadixSlider.Root>
  </StyledSlider>
)
Slider.toString = () => `.${StyledSlider.className}`
