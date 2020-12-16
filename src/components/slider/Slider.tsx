import MaterialSlider, {
  SliderProps as MaterialSliderProps,
} from '@material-ui/core/Slider'
import { BoxProps, withBoxProps } from '../../internal/wrappers'

export type SliderProps = BoxProps &
  Omit<MaterialSliderProps, 'onChange'> & {
    onChange?: (e: React.ChangeEvent<{}>, value: number | number[]) => void
  }

export const Slider = withBoxProps<MaterialSliderProps>(
  MaterialSlider
) as React.ComponentType<SliderProps>
