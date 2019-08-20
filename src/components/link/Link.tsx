import * as React from "react"
import MaterialLink, {
  LinkProps as MaterialLinkProps
} from "@material-ui/core/Link"

export type LinkProps = MaterialLinkProps

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { href, target } = props
  if (target === "_blank" && href && href.indexOf(":") > -1) {
    return <MaterialLink rel="noopener" {...props} />
  } else {
    return <MaterialLink {...props} />
  }
}
Link.displayName = "Link"

export default Link
