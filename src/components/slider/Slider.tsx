import { withWrapper, WithWrapperProps } from '../../internal'
import MaterialSlider, {
  SliderProps as MaterialSliderProps,
} from '@material-ui/core/Slider'

export type SliderProps = WithWrapperProps & MaterialSliderProps

export const Slider = withWrapper(MaterialSlider)
