/**
 *
 * If the value is less than or equal to 1 then transform to a string percentage.
 * Otherwise return the value.
 *
 * For use in css styling for sizes
 *
 * @param value the value to transform
 */
export function fractionToPercent(value: number) {
  return value <= 1 ? ''.concat(String(value * 100), '%') : value
}

/**
 * Return the object with the given keys removed
 */
export function omit<P extends object>(object: P, omit: string[]): Partial<P> {
  return Object.keys(object)
    .filter(key => !omit.includes(key))
    .reduce((filtered, key) => {
      filtered[key] = object[key]
      return filtered
    }, {})
}

/**
 * Return the object with the given keys retained
 */
export function keep<P extends object>(
  object: P,
  allowed: string[]
): Partial<P> {
  return Object.keys(object)
    .filter(key => allowed.includes(key))
    .reduce((filtered, key) => {
      filtered[key] = object[key]
      return filtered
    }, {})
}
