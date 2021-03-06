import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import * as MaterialIcons from '@material-ui/icons'

export interface IconProps extends SvgIconProps {}

type SvgIconComponent = typeof SvgIcon
type Keys = keyof typeof MaterialIcons

const icons = Object.keys(MaterialIcons).filter((key) => key.endsWith('Sharp'))

export const Icons: {
  [key: string]: SvgIconComponent
} = icons.reduce(
  (obj, key) => {
    obj[key.slice(0, -5)] = MaterialIcons[key as Keys]
    return obj
  },
  {} as {
    [key: string]: SvgIconComponent
  }
)
