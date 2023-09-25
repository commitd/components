import { definePreset } from '@pandacss/dev'
import type { Preset, PropertyTransform, PropertyValues } from '@pandacss/types'

export type Surface = 'neutral' | 'solid' | 'glass' | 'transparent'
export type SurfaceVariants = { surface?: Surface }
export const surfaces: Surface[] = ['neutral', 'solid', 'glass', 'transparent']



const sizeValues: PropertyValues = (theme) => ({
  auto: 'auto',
  ...theme('sizes'),
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
})

export function preset(): Preset {
  return definePreset({
    utilities: {
      extend: {
        size: {
          className: 'size',
          values: sizeValues,
          shorthand: 's',
          transform(value: any) {
            return {
              width: value,
              height: value,
            }
          },
        },
        surface: {
          className: 'surface',
          values: surfaces,
          shorthand: 'sur',
          transform(
            value: Surface,
            { token }: Parameters<PropertyTransform>[1],
          ) {
            const css = {
              backgroundColor: token(`colors.$surface.${value}`),
              backdropFilter:
                value === 'glass' ? 'saturate(80%) blur(5px)' : 'unset',
            }
            return css
          },
        },
      },
    },

    conditions: {
      extend: {
        notVertical: '&:not([data-orientation=vertical])',
        notHorizontal: '&:not([data-orientation=horizontal])',
        indeterminate:
          '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
        open: '&:is([open], [data-state=open])',
        closed: '&:is([closed], [data-state=closed])',
        checked:
          '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
      },
    },
  })
}
