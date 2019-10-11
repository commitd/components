import { FC } from 'react'
import {
  ContentDistribution,
  ContentPosition,
  DisplayOutside,
  SelfPosition
} from 'csstype'
import {
  SpacingProps,
  DisplayProps,
  FlexboxProps,
  SizingProps
} from '@material-ui/system'

/***********************************************************************************
 * These types are for documentation only,
 * they are missing property values to simplify their display.
 * DO NOT USE
 ***********************************************************************************/

interface DocDisplayProps {
  /**
   * The `display` CSS property defines the display type of an element.
   *
   * Both the display outside and display inside can be given separated by a space.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   *
   * @default inline
   */
  display?:
    | DisplayOutside
    | 'flex'
    | 'flow'
    | 'flow-root'
    | 'grid'
    | 'contents'
    | 'list-item'
    | 'none'
  /**
   * The display property when in print mode
   */
  displayPrint?: string
  /**
   * The `overflow` CSS property sets what to do when an element's content is too big to fit in its block formatting context.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   * @default visible
   */
  overflow?: 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible'
  /**
   * The `text-overflow` CSS property sets how hidden overflow content is signaled to users.
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   * @default clip
   */
  textOverflow?: 'clip' | 'ellipsis'
  /**
   *  The `visibility` CSS property shows or hides an element without changing the layout of a document.
   *
   *  @see https://developer.mozilla.org/docs/Web/CSS/visibility
   *  @default visible
   */
  visibility?: 'collapse' | 'hidden' | 'visible'
  /**
   * The `white-space` CSS property sets how white space inside an element is handled.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   * @default normal
   */
  whiteSpace?:
    | '-moz-pre-wrap'
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
}

interface DocSpacingProps {
  /**
   * The `margin` prop sets the margin area on all four sides of an element.
   * It is a shorthand for `marginTop`, `marginRight`, `marginBottom`, and `marginLeft`.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   * @default 0
   */
  margin?: number
  /**
   * Shorthand for margin
   * @default 0
   */
  m?: number
  /**
   * The `marginTop` prop sets the margin area on the top of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   * @default 0
   */
  marginTop?: number
  /**
   * Shorthand for marginTop
   * @default 0
   */
  mt?: number
  /**
   * The `marginRight` prop sets the margin area on the right side of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   * @default 0
   */
  marginRight?: number
  /**
   * Shorthand for marginRight
   * @default 0
   */
  mr?: number
  /**
   * The `marginBottom` prop sets the margin area on the bottom of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   * @default 0
   */
  marginBottom?: number
  /**
   * Shorthand for marginBottom
   * @default 0
   */
  mb?: number
  /**
   * The `marginLeft` prop sets the margin area on the left side of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   * @default 0
   */
  marginLeft?: number
  /**
   * Shorthand for marginLeft
   * @default 0
   */
  ml?: number
  /**
   * The `marginX` sets the margin area on the left and right sides of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   * @default 0
   */
  marginX?: number
  /**
   * Shorthand for marginX
   * @default 0
   */
  mx?: number
  /**
   * The `marginY` prop sets the margin area on the top and bottom of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   * @default 0
   */
  marginY?: number
  /**
   * Shorthand for marginY
   * @default 0
   */
  my?: number
  /**
   * The `padding` prop sets the padding area on all sides of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   * @default 0
   */
  padding?: number
  /**
   * Shorthand for padding
   * @default 0
   */
  p?: number
  /**
   * The `paddingTop` prop sets the height of the padding area on the top of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   * @default 0
   */
  paddingTop?: number
  /**
   * Shorthand for paddingTop
   * @default 0
   */
  pt?: number
  /**
   * The `paddingRight` prop sets the width of the padding area on the right side of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   * @default 0
   */
  paddingRight?: number
  /**
   * Shorthand for paddingRight
   * @default 0
   */
  pr?: number
  /**
   * The `paddingBottom` prop sets the height of the padding area on the bottom of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   * @default 0
   */
  paddingBottom?: number
  /**
   * Shorthand for paddingBottom
   * @default 0
   */
  pb?: number
  /**
   * The `paddingLeft` prop sets the width of the padding area on the left side of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   * @default 0
   */
  paddingLeft?: number
  /**
   * Shorthand for paddingLeft
   * @default 0
   */
  pl?: number
  /**
   * The `paddingX` prop sets the width of the padding area on the left and right of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   * @default 0
   */
  paddingX?: number
  /**
   * Shorthand for paddingX
   * @default 0
   */
  px?: number
  /**
   * The `paddingY` property sets the height of the padding area on the top and bottom of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   * @default 0
   */
  paddingY?: number
  /**
   * Shorthand for paddingY
   * @default 0
   */
  py?: number
}

interface DocFlexboxProps {
  /**
   * The flex prop sets how a flex item will grow or shrink to fit the space available in its flex container.
   * It is a shorthand for flexGrow, flexShrink, and flexBasis.
   * For most purposes, authors should set flex to one of the following values: auto, initial, none, or a positive unitless number.
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: string
  /**
   * The `flexBasis` prop sets the initial main size of a flex item.
   * It sets the size of the content box unless otherwise set with `box-sizing`.
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   * @default auto
   */
  flexBasis?:
    | 'auto'
    | 'available'
    | 'content'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | number
  /**
   * The `flexDirection` prop sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   * @default row
   */
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  /**
   * The `flexWrap` prop sets whether flex items are forced onto one line or can wrap onto multiple lines.
   * If wrapping is allowed, it sets the direction that lines are stacked.
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   * @default nowrap
   */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /**
   * The `justifyContent` prop defines how the browser distributes space between and around content items along the main-axis of a flex container,
   * and the inline axis of a grid container.
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   * @default normal
   */
  justifyContent?:
    | ContentDistribution
    | ContentPosition
    | 'left'
    | 'normal'
    | 'right'
  /**
   * The `alignItems` prop sets the `align-self` value on all direct children as a group.
   * The align-self property sets the alignment of an item within its containing block.
   * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it
   * controls the alignment of items on the Block Axis within their grid area.
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   * @default normal
   */
  alignItems?: SelfPosition | 'baseline' | 'normal' | 'stretch'

  /**
   * The `alignContent` prop sets how the browser distributes space between and around content items
   * along the cross-axis of a flexbox container, and the main-axis of a grid container.
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   * @default normal
   */
  alignContent?: SelfPosition | 'auto' | 'baseline' | 'normal' | 'stretch'
  /**
   * The `order` prop sets the order to lay out an item in a flex or grid container.
   * Items in a container are sorted by ascending `order` value and then by their source code order.
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   * @default 0
   */
  order?: number
  /**
   * The `flexGrow` prop sets how much of the available space in the flex container should be assigned
   * to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all
   * items will receive the same share of available space, otherwise it is distributed according to the
   * ratio defined by the different flex grow factors.
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   * @default 0
   */
  flexGrow?: number
  /**
   * The `flexShrink` prop sets the flex shrink factor of a flex item. If the size of flex items is larger
   * than the flex container, items shrink to fit according to `flex-shrink`.
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   * @default 1
   */
  flexShrink?: number
  /**
   * The `alignSelf` prop aligns flex items of the current flex line overriding the `alignItems` value.
   * If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored.
   * In Grid layout `align-self` aligns the item inside the grid area.
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   * @default auto
   */
  alignSelf?: SelfPosition | 'auto' | 'baseline' | 'normal' | 'stretch'
  /**
   * The `justifyItems` property defines the default `justifySelf` for all items of the box, giving them all a
   * default way of justifying each box along the appropriate axis.
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   * @default legacy
   */
  justifyItems?:
    | SelfPosition
    | 'baseline'
    | 'left'
    | 'legacy'
    | 'normal'
    | 'right'
    | 'stretch'
  /**
   * The `justifySelf` prop sets the way a box is justified inside its alignment container along the appropriate axis.
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   * @default auto
   */
  justifySelf?:
    | SelfPosition
    | 'auto'
    | 'baseline'
    | 'left'
    | 'normal'
    | 'right'
    | 'stretch'
}
interface DocSizingProps {
  /**
   * The `width` prop sets an element's width.
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   * @default auto
   */
  width?:
    | number
    | 'auto'
    | 'available'
    | 'fit-content'
    | 'intrinsic'
    | 'max-content'
    | 'min-content'
    | 'min-intrinsic'
  /**
   * The `maxWidth` prop sets the maximum width of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   * @default none
   */
  maxWidth?:
    | number
    | 'fill-available'
    | 'fit-content'
    | 'intrinsic'
    | 'max-content'
    | 'min-content'
    | 'none'
  /**
   * The `minWidth` prop sets the minimum width of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   * @default auto
   */
  minWidth?:
    | number
    | 'auto'
    | 'fill-available'
    | 'fit-content'
    | 'intrinsic'
    | 'max-content'
    | 'min-content'
    | 'min-intrinsic'
  /**
   * The `height` prop specifies the height of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   * @default auto
   */
  height?:
    | number
    | 'auto'
    | 'available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'

  /**
   * The `maxHeight` prop sets the maximum height of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   * @default none
   */
  maxHeight?:
    | number
    | 'fill-available'
    | 'fit-content'
    | 'intrinsic'
    | 'max-content'
    | 'min-content'
    | 'none'
  /**
   * The `minHeight` prop sets the minimum height of an element.
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   * @default auto
   */
  minHeight?:
    | number
    | 'auto'
    | 'fill-available'
    | 'fit-content'
    | 'intrinsic'
    | 'max-content'
    | 'min-content'
}

// We add back the original props, incase there are any changes that are not documented.
export const Display: FC<
  DocDisplayProps & Omit<DisplayProps, keyof DocDisplayProps>
> = () => null
export const Spacing: FC<
  DocSpacingProps & Omit<SpacingProps, keyof DocSpacingProps>
> = () => null
export const Flexbox: FC<
  DocFlexboxProps & Omit<FlexboxProps, keyof DocFlexboxProps>
> = () => null
export const Sizing: FC<
  DocSizingProps & Omit<SizingProps, keyof DocSizingProps>
> = () => null
