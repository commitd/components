import * as React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

export type IconsDocsProps = Omit<
  SvgIconProps,
  keyof Omit<
    React.SVGProps<SVGSVGElement>,
    'color' | 'htmlColor' | 'shapeRendering' | 'titleAccess' | 'viewBox'
  >
>

export const IconsDocs: React.FC<IconsDocsProps> = () => null
