import * as React from 'react'
import { SliderProps } from '@material-ui/core/Slider'

export type SliderDocsProps = Omit<
  SliderProps,
  keyof Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    'color' | 'onChange' | 'track'
  >
>
export const SliderDocs: React.FC<SliderDocsProps> = () => null
