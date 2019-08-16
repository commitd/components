import * as React from "react"
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from "@material-ui/system"
import { sizing, SizingProps } from "@material-ui/system"
import { styled } from "@material-ui/styles"
import MaterialCard, {
  CardProps as MaterialCardProps
} from "@material-ui/core/Card"
import MaterialCardActionArea, {
  CardActionAreaProps as MaterialCardActionAreaProps
} from "@material-ui/core/CardActionArea"
import MaterialCardActions, {
  CardActionsProps as MaterialCardActionsProps
} from "@material-ui/core/CardActions"
import MaterialCardContent, {
  CardContentProps as MaterialCardContentProps
} from "@material-ui/core/CardContent"
import MaterialCardHeader, {
  CardHeaderProps as MaterialCardHeaderProps
} from "@material-ui/core/CardHeader"
import MaterialCardMedia, {
  CardMediaProps as MaterialCardMediaProps
} from "@material-ui/core/CardMedia"
export type CardProps = MaterialCardProps & SpacingProps & FlexboxProps

export const Card = styled(MaterialCard)(
  compose(
    spacing,
    flexbox
  )
)

Card.defaultProps = {
  // CardShadowSize: "md",
  // borderColor: "borderGray",
  // borderRadius: 6,
  // borderWidth: 0,
  // p: 4
}

Card.displayName = "Card"

export default Card as React.FC<CardProps>

export type CardHeaderProps = MaterialCardHeaderProps
export type CardContentProps = MaterialCardContentProps
export type CardActionAreaProps = MaterialCardActionAreaProps
export type CardActionsProps = MaterialCardActionsProps
export type CardMediaProps = MaterialCardMediaProps & SizingProps

export const CardHeader: React.FC<CardHeaderProps> = (
  props: CardHeaderProps
) => {
  if (typeof (props.children && props.children) === "string") {
    return <MaterialCardHeader {...props} title={props.children} />
  }
  return <MaterialCardHeader {...props} />
}
CardHeader.displayName = "CardHeader"
export const CardContent: React.FC<CardContentProps> = (
  props: CardContentProps
) => <MaterialCardContent {...props} />
CardContent.displayName = "CardContent"
export const CardActionArea: React.FC<CardActionAreaProps> = (
  props: CardActionAreaProps
) => <MaterialCardActionArea {...props} />
CardActionArea.displayName = "CardActionArea"
export const CardActions: React.FC<CardActionsProps> = (
  props: CardActionsProps
) => <MaterialCardActions {...props} />
CardActions.displayName = "CardActions"
export const CardMedia = styled(MaterialCardMedia)(sizing) as React.FC<
  CardMediaProps
>
CardMedia.displayName = "CardMedia"
