import * as React from 'react'
import MaterialContainer, {
  ContainerProps as MaterialContainerProps
} from '@material-ui/core/Container'

export type ContainerProps = MaterialContainerProps

export const Container: React.ComponentType<ContainerProps> = MaterialContainer
Container.displayName = 'Container'

export default Container as React.FC<ContainerProps>
