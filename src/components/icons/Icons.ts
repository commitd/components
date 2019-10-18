import { FC, SVGProps } from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import * as MaterialIcons from '@material-ui/icons'

export interface IconProps extends SvgIconProps {}

type SvgIconComponent = typeof SvgIcon

const icons = Object.keys(MaterialIcons).filter(key => key.endsWith('Sharp'))

export const Icons: { [key: string]: SvgIconComponent } = icons.reduce(
  (obj, key) => {
    obj[key.slice(0, -5)] = MaterialIcons[key]
    return obj
  },
  {}
)

// For documentation only
export type IconsDocsProps = Omit<
  IconProps,
  keyof Omit<
    SVGProps<SVGSVGElement>,
    'color' | 'htmlColor' | 'shapeRendering' | 'titleAccess' | 'viewBox'
  >
>

export const IconsDocs: FC<IconsDocsProps> = () => null
