import React from 'react'
import { getDisplayName } from './util'

export interface AProps {
  href?: string
  target?: string
}

interface RelProps {
  rel?: string
}

export const withNoOpener = <P extends AProps>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithNoOpener extends React.Component<P> {
    displayName = `WithWrapper(${getDisplayName(WrappedComponent)})`

    render() {
      const extras: RelProps = {}
      const { href, target } = this.props
      if (target === '_blank' && href && href.indexOf(':') > -1) {
        extras.rel = 'noopener'
      }
      return <WrappedComponent {...extras} {...this.props} />
    }
  }
