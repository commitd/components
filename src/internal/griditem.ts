import { style, compose, PropsFor, StyleFunction } from '@material-ui/system'
type SimpleStyleFunction<PropKey extends keyof any> = StyleFunction<Partial<Record<PropKey, any>>>;

export const gridColumnStart = style({
  prop: 'gridColumnStart'
})

export const gridColumnEnd = style({
  prop: 'gridColumnEnd'
})

export const gridRowStart = style({
  prop: 'gridRowStart'
})

export const gridRowEnd = style({
  prop: 'gridRowEnd'
})

export const gridColumn = style({
  prop: 'gridColumn'
})

export const gridRow = style({
  prop: 'gridRow'
})

export const gridArea = style({
  prop: 'gridArea'
})

export const justifySelf = style({
  prop: 'justifySelf'
})

export const alignSelf = style({
  prop: 'alignSelf'
})

export const placeSelf = style({
  prop: 'placeSelf'
})

export const griditem: SimpleStyleFunction<
| 'gridColumnStart'
| 'gridColumnEnd'
| 'gridRowStart'
| 'gridRowEnd'
| 'gridColumn'
| 'gridRow'
| 'gridArea'
| 'justifySelf'
| 'alignSelf'
| 'placeSelf'
> = compose(
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  gridColumn,
  gridRow,
  gridArea,
  justifySelf,
  alignSelf,
  placeSelf
)

export type GriditemProps = PropsFor<typeof griditem>;

