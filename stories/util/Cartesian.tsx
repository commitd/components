// @ts-nocheck
import React, { Fragment } from 'react'

const arr = <T extends unknown>(v: T | Array<T>): Array<T> =>
  Array.isArray(v) ? v : [v]

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

export const Cartesian = ({ component, container = Fragment, ...props }) => {
  const combinations = cartesianProduct(props)
  const Component = component
  const Container = container

  return (
    <Fragment>
      {combinations.map((props, i: number) => (
        <Container key={i}>
          <Component {...props} />
        </Container>
      ))}
    </Fragment>
  )
}
