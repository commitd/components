import { FC, HTMLAttributes } from 'react'
import Container, { ContainerProps } from '@material-ui/core/Container'

export type ContainerProps = ContainerProps
export { Container }

// For documentation only
export type ContainerDocsProps = Omit<
  ContainerProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export const ContainerDocs: FC<ContainerDocsProps> = () => null
