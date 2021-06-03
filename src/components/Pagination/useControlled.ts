/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
import * as React from 'react'

export interface UseControlledProps<T = unknown> {
  /**
   * This prop contains the component value when it's controlled.
   */
  controlled: T | undefined
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined
  /**
   * The component name displayed in warnings.
   */
  name: string
  /**
   * The name of the state variable displayed in warnings.
   */
  state?: string
}

export function useControlled<T = unknown>({
  controlled,
  default: defaultProp,
  name,
  state = 'value',
}: UseControlledProps<T>): [T, (newValue: T) => void] {
  const { current: isControlled } = React.useRef(controlled !== undefined)
  const [valueState, setValue] = React.useState(defaultProp)
  const value = isControlled ? controlled : valueState

  if (process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error(
          [
            `Material-UI: A component is changing the ${
              isControlled ? '' : 'un'
            }controlled ${state} state of ${name} to be ${
              isControlled ? 'un' : ''
            }controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            `Decide between using a controlled or uncontrolled ${name} ` +
              'element for the lifetime of the component.',
            "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.",
            'More info: https://fb.me/react-controlled-components',
          ].join('\n')
        )
      }
    }, [controlled])

    const { current: defaultValue } = React.useRef(defaultProp)

    React.useEffect(() => {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(
          [
            `Material-UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`,
          ].join('\n')
        )
      }
    }, [JSON.stringify(defaultProp)])
  }

  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue)
    }
  }, [])
  //@ts-ignore
  return [value, setValueIfUncontrolled]
}
