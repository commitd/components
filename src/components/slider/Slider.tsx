import React, { FC, HTMLAttributes } from 'react'
import { withWrapper, WithWrapperProps } from '../internal'
import MaterialSlider, {
  SliderProps as MaterialSliderProps
} from '@material-ui/core/Slider'

export type SliderProps = MaterialSliderProps & WithWrapperProps

export const Slider: React.ComponentType<SliderProps> = withWrapper(
  MaterialSlider
)

// For documentation only
export type SliderDocsProps = Omit<
  MaterialSliderProps,
  keyof Omit<HTMLAttributes<HTMLSpanElement>, 'color' | 'onChange' | 'track'>
>
export const SliderDocs: FC<SliderDocsProps> = () => null
