export const getDisplayName = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => WrappedComponent.displayName || WrappedComponent.name || 'Component'
