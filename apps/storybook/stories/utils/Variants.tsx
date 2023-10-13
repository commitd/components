// @ts-nocheck
import { Grid, Tooltip } from '@committed/ds'
import { SystemStyleObject } from '@committed/ds-ss'
import { ElementType, Fragment } from 'react'

const arr = <T extends unknown>(v: T | Array<T>): Array<T> =>
  Array.isArray(v) ? v : [v]

// eslint-disable-next-line prefer-spread
const flatten = <T extends unknown>(arr: Array<T>) => [].concat.apply([], arr)
const cartesianProduct = (props: { [x: string]: any }): { [x: string]: any } =>
  Object.keys(props)
    .map((k) => arr(props[k]).map((v) => [k, v]))
    .reduce(
      (acc, set) => flatten(acc.map((x) => set.map((y) => [...x, y]))),
      [[]],
    )
    .map((pairsArr) =>
      pairsArr.reduce((result, [k, v]) => ({ ...result, [k]: v }), {}),
    )

type ArrayProps<Props> = { [K in keyof Props]: Array<Props[K]> }

export const Variants = <T extends ElementType>({
  gridCss = { gridTemplateColumns: '1fr 1fr 1fr 1fr' },
  component,
  container = Fragment,
  ...props
}: {
  gridCss?: SystemStyleObject
  container?: () => ReactElement<any, any>
  component: T // (props: P) => ReactElement<any, any>
} & ArrayProps<ComponentProps<T>>) => {
  const combinations = cartesianProduct(props)
  const Component = component
  const Container = container

  return (
    <Grid gap css={gridCss}>
      <>
        {combinations.map((props, i: number) => {
          const { css, children, ...display } = props
          return (
            <Container key={i}>
              <Tooltip content={<pre>{JSON.stringify(display, null, 2)}</pre>}>
                <Component {...props} />
              </Tooltip>
            </Container>
          )
        })}
      </>
    </Grid>
  )
}
