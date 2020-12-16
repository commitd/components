import React from 'react'
import { getDisplayName } from './util'

export interface AProps {
  href?: string
  target?: string
}

interface RelProps {
  rel?: string
}

export function withNoOpener<P extends AProps & { ref?: React.Ref<any> }>(
  Component: React.ForwardRefExoticComponent<P>
): React.ForwardRefExoticComponent<P>

export function withNoOpener<P>(
  Component: React.FunctionComponent<P>
): React.ForwardRefExoticComponent<P>

export function withNoOpener<P extends AProps>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> {
  class WithNoOpener extends React.Component<
    P & { forwardedRef: React.Ref<any> }
  > {
    displayName = `WithWrapper(${getDisplayName(WrappedComponent)})`

    render() {
      const extras: RelProps = {}
      const { forwardedRef, ...originalProps } = this.props
      const forwardedProps = originalProps as P
      const { href, target } = this.props
      if (target === '_blank' && href && href.indexOf(':') > -1) {
        extras.rel = 'noopener'
      }
      return (
        <WrappedComponent ref={forwardedRef} {...extras} {...forwardedProps} />
      )
    }
  }

  // @ts-ignore
  return React.forwardRef(function noOpener(props, ref) {
    return <WithNoOpener {...props} forwardedRef={ref} />
  })
}
