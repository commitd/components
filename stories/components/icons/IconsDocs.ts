import { FC, SVGProps } from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

// For documentation only
export type IconsDocsProps = Omit<
  SvgIconProps,
  keyof Omit<
    SVGProps<SVGSVGElement>,
    'color' | 'htmlColor' | 'shapeRendering' | 'titleAccess' | 'viewBox'
  >
>

export const IconsDocs: FC<IconsDocsProps> = () => null
