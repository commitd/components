import MaterialSlider, {
  SliderProps as MaterialSliderProps,
} from '@material-ui/core/Slider'
import { BoxProps, withBoxProps } from '../../internal/wrappers'

export type SliderProps = BoxProps & MaterialSliderProps

export const Slider = withBoxProps<MaterialSliderProps>(MaterialSlider)
