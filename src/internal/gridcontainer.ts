import {
  style,
  compose,
  PropsFor,
  ComposedStyleFunction,
} from '@material-ui/system'

export const gridTemplateColumns = style({
  prop: 'gridTemplateColumns',
})

export const gridTemplateRows = style({
  prop: 'gridTemplateRows',
})

export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
})

export const gridTemplate = style({
  prop: 'gridTemplate',
})

export const columnGap = style({
  prop: 'columnGap',
  themeKey: 'spacing',
  // although grid-column-gap is deprecated in favor of column-gap seems to error in react
  cssProperty: 'gridColumnGap',
})

export const rowGap = style({
  prop: 'rowGap',
  themeKey: 'spacing',
  // although grid-row-gap is deprecated in favor of row-gap seems to error in react
  cssProperty: 'gridRowGap',
})

export const gap = style({
  prop: 'gap',
  themeKey: 'spacing',
  // although grid-gap is deprecated in favor of gap seems to error in react
  cssProperty: 'gridGap',
})

export const justifyItems = style({
  prop: 'justifyItems',
})

export const alignItems = style({
  prop: 'alignItems',
})

export const placeItems = style({
  prop: 'placeItems',
})

export const justifyContent = style({
  prop: 'justifyContent',
})

export const alignContent = style({
  prop: 'alignContent',
})

export const placeContent = style({
  prop: 'placeContent',
})

export const gridAutoColumns = style({
  prop: 'gridAutoColumns',
})

export const gridAutoRows = style({
  prop: 'gridAutoRows',
})

export const gridAutoFlow = style({
  prop: 'gridAutoFlow',
})

export const gridcontainer: ComposedStyleFunction<[
  typeof gridTemplateColumns,
  typeof gridTemplateRows,
  typeof gridTemplateAreas,
  typeof gridTemplate,
  typeof columnGap,
  typeof rowGap,
  typeof gap,
  typeof justifyItems,
  typeof alignItems,
  typeof placeItems,
  typeof justifyContent,
  typeof alignContent,
  typeof placeContent,
  typeof gridAutoColumns,
  typeof gridAutoRows,
  typeof gridAutoFlow
]> = compose(
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridTemplate,
  columnGap,
  rowGap,
  gap,
  justifyItems,
  alignItems,
  placeItems,
  justifyContent,
  alignContent,
  placeContent,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow
)

export type GridcontinerProps = PropsFor<typeof gridcontainer>
