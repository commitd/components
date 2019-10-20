import { FC, AnchorHTMLAttributes } from 'react'
import MaterialLink, {
  LinkProps as MaterialLinkProps
} from '@material-ui/core/Link'
import { withNoOpener } from '../../internal'

export interface LinkProps extends MaterialLinkProps {}

export const Link: React.ComponentType<LinkProps> = withNoOpener<LinkProps>(
  MaterialLink
)

// For documentation only
export type LinkDocsProps = Omit<
  LinkProps,
  keyof (Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'color' | 'href' | 'target' | 'rel'
  >)
>

export const LinkDocs: FC<LinkDocsProps> = () => null
