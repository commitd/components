import { ElementType, HTMLAttributes } from 'react'

export const getDisplayName = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => WrappedComponent.displayName || WrappedComponent.name || 'Component'

export type OverrideComponent = {
  /**
   * Use to supply an alternative component type for the content
   * defaults to 'div'
   */
  component?: ElementType<HTMLAttributes<HTMLDivElement>>
}
