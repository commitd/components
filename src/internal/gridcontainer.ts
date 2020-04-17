import {
  style,
  compose,
  PropsFor,
  ComposedStyleFunction,
} from '@material-ui/system'
import { Theme } from '../theme'

export const gridTemplateColumns = style<'gridTemplateColumns', Theme>({
  prop: 'gridTemplateColumns',
})

export const gridTemplateRows = style<'gridTemplateRows', Theme>({
  prop: 'gridTemplateRows',
})

export const gridTemplateAreas = style<'gridTemplateAreas', Theme>({
  prop: 'gridTemplateAreas',
})

export const gridTemplate = style<'gridTemplate', Theme>({
  prop: 'gridTemplate',
})

export const columnGap = style<'columnGap', Theme>({
  prop: 'columnGap',
  themeKey: 'spacing',
  // although grid-column-gap is deprecated in favor of column-gap seems to error in react
  cssProperty: 'gridColumnGap',
})

export const rowGap = style<'rowGap', Theme>({
  prop: 'rowGap',
  themeKey: 'spacing',
  // although grid-row-gap is deprecated in favor of row-gap seems to error in react
  cssProperty: 'gridRowGap',
})

export const gap = style<'gap', Theme>({
  prop: 'gap',
  themeKey: 'spacing',
  // although grid-gap is deprecated in favor of gap seems to error in react
  cssProperty: 'gridGap',
})

export const justifyItems = style<'justifyItems', Theme>({
  prop: 'justifyItems',
})

export const alignItems = style<'alignItems', Theme>({
  prop: 'alignItems',
})

export const placeItems = style<'placeItems', Theme>({
  prop: 'placeItems',
})

export const justifyContent = style<'justifyContent', Theme>({
  prop: 'justifyContent',
})

export const alignContent = style<'alignContent', Theme>({
  prop: 'alignContent',
})

export const placeContent = style<'placeContent', Theme>({
  prop: 'placeContent',
})

export const gridAutoColumns = style<'gridAutoColumns', Theme>({
  prop: 'gridAutoColumns',
})

export const gridAutoRows = style<'gridAutoRows', Theme>({
  prop: 'gridAutoRows',
})

export const gridAutoFlow = style<'gridAutoFlow', Theme>({
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

export type GridcontinerProps = Omit<PropsFor<typeof gridcontainer>, 'theme'>
