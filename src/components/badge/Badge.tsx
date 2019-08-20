import * as React from "react"
import MaterialBadge, {
  BadgeProps as MaterialBadgeProps
} from "@material-ui/core/Badge"

export type BadgeProps = MaterialBadgeProps

export const Badge: React.FC<BadgeProps> = MaterialBadge
Badge.displayName = "Badge"

export default Badge as React.FC<BadgeProps>
