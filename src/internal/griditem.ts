import {
  style,
  compose,
  PropsFor,
  ComposedStyleFunction,
} from '@material-ui/system'
import { Theme } from '../theme'

export const gridColumnStart = style<'gridColumnStart', Theme>({
  prop: 'gridColumnStart',
})

export const gridColumnEnd = style<'gridColumnEnd', Theme>({
  prop: 'gridColumnEnd',
})

export const gridRowStart = style<'gridRowStart', Theme>({
  prop: 'gridRowStart',
})

export const gridRowEnd = style<'gridRowEnd', Theme>({
  prop: 'gridRowEnd',
})

export const gridColumn = style<'gridColumn', Theme>({
  prop: 'gridColumn',
})

export const gridRow = style<'gridRow', Theme>({
  prop: 'gridRow',
})

export const gridArea = style<'gridArea', Theme>({
  prop: 'gridArea',
})

export const justifySelf = style<'justifySelf', Theme>({
  prop: 'justifySelf',
})

export const alignSelf = style<'alignSelf', Theme>({
  prop: 'alignSelf',
})

export const placeSelf = style<'placeSelf', Theme>({
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

export type GriditemProps = Omit<PropsFor<typeof griditem>, 'theme'>
