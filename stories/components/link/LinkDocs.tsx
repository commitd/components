import * as React from 'react'
// TODO: remove when storybook props issue fixed
//import { LinkProps } from '../../../src'
import MaterialLink, {
  LinkProps as MaterialLinkProps,
} from '@material-ui/core/Link'
import { Link } from '../../../src'

const CustomComponent = ({ href }: { href: string }) => <div>{href}</div>
export const CustomLink = ({ href }: { href: string }) => (
  <Link component={CustomComponent} href={href} />
)

export interface LinkProps extends Omit<MaterialLinkProps, 'variant'> {
  /**
   *
   * Styling variations on the link,
   *
   * default: standard link underlining
   * clear: remove text decoration and hover changes
   * styled: colored background, different for internal and external links
   *
   * @default default
   */
  variant?: 'default' | 'clear' | 'styled'
}

export type LinkDocsProps = Omit<
  LinkProps,
  keyof Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'color' | 'href' | 'target' | 'rel'
  >
>

export const LinkDocs: React.FC<LinkDocsProps> = () => null
