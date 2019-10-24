import { style, compose, PropsFor, StyleFunction } from '@material-ui/system'
type SimpleStyleFunction<PropKey extends keyof any> = StyleFunction<Partial<Record<PropKey, any>>>;

export const gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
})

export const gridTemplateRows = style({
  prop: 'gridTemplateRows'
})

export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
})

export const gridTemplate = style({
  prop: 'gridTemplate'
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  themeKey: 'spacing'
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  themeKey: 'spacing'
})

export const gridGap = style({
  prop: 'gridGap',
  themeKey: 'spacing'
})

export const justifyItems = style({
  prop: 'justifyItems'
})

export const alignItems = style({
  prop: 'alignItems'
})

export const placeItems = style({
  prop: 'placeItems'
})

export const justifyContent = style({
  prop: 'justifyContent'
})

export const alignContent = style({
  prop: 'alignContent'
})

export const placeContent = style({
  prop: 'placeContent'
})

export const gridAutoColumns = style({
  prop: 'gridAutoColumns'
})

export const gridAutoRows = style({
  prop: 'gridAutoRows'
})

export const gridAutoFlow = style({
  prop: 'gridAutoFlow'
})

export const gridcontainer: SimpleStyleFunction<
| 'gridTemplateColumns'
| 'gridTemplateRows'
| 'gridTemplateAreas'
| 'gridTemplate'
| 'gridColumnGap'
| 'gridRowGap'
| 'justifyItems'
| 'alignItems'
| 'placeItems'
| 'justifyContent'
| 'alignContent'
| 'placeContent'
| 'gridAutoColumns'
| 'gridAutoRows'
| 'gridAutoFlow'
> = compose(
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridTemplate,
  gridColumnGap,
  gridRowGap,
  gridGap,
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

export type GridcontinerProps = PropsFor<typeof gridcontainer>;