import { withWrapper, WithWrapperProps } from '../internal'
import MaterialSlider, {
  SliderProps as MaterialSliderProps
} from '@material-ui/core/Slider'

export type SliderProps = MaterialSliderProps & WithWrapperProps

export const Slider = withWrapper(MaterialSlider)
export default Slider
