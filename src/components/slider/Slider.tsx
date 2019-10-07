import React from 'react'
import { withWrapper, WithWrapperProps } from '../internal'
import MaterialSlider, {
  SliderProps as MaterialSliderProps
} from '@material-ui/core/Slider'

export type SliderProps = MaterialSliderProps & WithWrapperProps

export const Slider: React.ComponentType<SliderProps> = withWrapper(
  MaterialSlider
)
