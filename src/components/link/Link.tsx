import MaterialLink, {
  LinkProps as MaterialLinkProps
} from '@material-ui/core/Link'
import { withNoOpener } from '../internal'

export interface LinkProps extends MaterialLinkProps {}

export const Link: React.ComponentType<LinkProps> = withNoOpener<LinkProps>(
  MaterialLink
)
