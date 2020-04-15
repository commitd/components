import { FC, AnchorHTMLAttributes } from 'react'
import { LinkProps } from '../../../src'
// import MaterialLink, {
//   LinkProps as MaterialLinkProps
// } from '@material-ui/core/Link'

// export interface LinkProps extends Omit<MaterialLinkProps, 'variant'> {
//   /**
//    *
//    * Styling variations on the link,
//    *
//    * default: standard link underlining
//    * clear: remove text decoration and hover changes
//    * styled: colored background, different for internal and external links
//    *
//    * @default default
//    */
//   variant?: 'default' | 'clear' | 'styled'
// }

// For documentation only
export type LinkDocsProps = Omit<
  LinkProps,
  keyof Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'color' | 'href' | 'target' | 'rel'
  >
>

export const LinkDocs: FC<LinkDocsProps> = () => null
