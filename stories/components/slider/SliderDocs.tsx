import { FC, HTMLAttributes } from 'react'
import { SliderProps as MaterialSliderProps } from '@material-ui/core/Slider'

// For documentation only
export type SliderDocsProps = Omit<
  MaterialSliderProps,
  keyof Omit<HTMLAttributes<HTMLSpanElement>, 'color' | 'onChange' | 'track'>
>
export const SliderDocs: FC<SliderDocsProps> = () => null
