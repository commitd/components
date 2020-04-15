import {
  style,
  compose,
  PropsFor,
  ComposedStyleFunction,
} from '@material-ui/system'

export const gridColumnStart = style({
  prop: 'gridColumnStart',
})

export const gridColumnEnd = style({
  prop: 'gridColumnEnd',
})

export const gridRowStart = style({
  prop: 'gridRowStart',
})

export const gridRowEnd = style({
  prop: 'gridRowEnd',
})

export const gridColumn = style({
  prop: 'gridColumn',
})

export const gridRow = style({
  prop: 'gridRow',
})

export const gridArea = style({
  prop: 'gridArea',
})

export const justifySelf = style({
  prop: 'justifySelf',
})

export const alignSelf = style({
  prop: 'alignSelf',
})

export const placeSelf = style({
  prop: 'placeSelf',
})

export const griditem: ComposedStyleFunction<[
  typeof gridColumnStart,
  typeof gridColumnEnd,
  typeof gridRowStart,
  typeof gridRowEnd,
  typeof gridColumn,
  typeof gridRow,
  typeof gridArea,
  typeof justifySelf,
  typeof alignSelf,
  typeof placeSelf
]> = compose(
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

export type GriditemProps = PropsFor<typeof griditem>
