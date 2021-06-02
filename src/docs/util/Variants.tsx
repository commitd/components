// @ts-nocheck
import React, { Fragment } from 'react'
import { Grid, Tooltip } from '../../'

const arr = <T extends unknown>(v: T | Array<T>): Array<T> =>
  Array.isArray(v) ? v : [v]

// eslint-disable-next-line prefer-spread
const flatten = <T extends unknown>(arr: Array<T>) => [].concat.apply([], arr)
const cartesianProduct = (props: { [x: string]: any }): { [x: string]: any } =>
  Object.keys(props)
    .map((k) => arr(props[k]).map((v) => [k, v]))
    .reduce((acc, set) => flatten(acc.map((x) => set.map((y) => [...x, y]))), [
      [],
    ])
    .map((pairsArr) =>
      pairsArr.reduce((result, [k, v]) => ({ ...result, [k]: v }), {})
    )

export const Variants = ({
  gridCss = { gap: '$3', gridTemplateColumns: '1fr 1fr 1fr 1fr' },
  component,
  container = Fragment,
  ...props
}) => {
  const combinations = cartesianProduct(props)
  const Component = component
  const Container = container

  return (
    <Grid css={gridCss}>
      {combinations.map((props, i: number) => {
        const { css, children, ...display } = props
        return (
          <Container key={i}>
            <Tooltip content={<pre>{JSON.stringify(display, null, 2)}</pre>}>
              <span>
                <Component {...props} />
              </span>
            </Tooltip>
          </Container>
        )
      })}
    </Grid>
  )
}

// TODO ADD Tooltip eg

{
  /* 
  props => {
  const {
    m,
    children,
    ...display
  } = props;
  <Tooltip title={<Monospace>{JSON.stringify(display, null, 2)}</Monospace>}>
      <Button {...props} />
  </Tooltip>; */
}
