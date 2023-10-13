/* eslint-disable security-node/detect-crlf */
export function handleErrors<A extends unknown[]>(
  p: (...args: A) => Promise<void>,
): (...args: A) => void {
  return (...args: A) => {
    p(...args).catch((err) => {
      if (typeof err == 'string') {
        console.log(`Error thrown asynchronously ${err}`)
      } else if (err instanceof Error) {
        console.log(`Error thrown asynchronously ${err.message}`)
      } else {
        console.log('Error thrown asynchronously')
      }
    })
  }
}
