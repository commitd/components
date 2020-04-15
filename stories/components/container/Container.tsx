import { FC, HTMLAttributes } from 'react'
import Container, { ContainerProps } from '@material-ui/core/Container'
export { Container, ContainerProps }

// For documentation only
export type ContainerDocsProps = Omit<
  ContainerProps,
  keyof HTMLAttributes<HTMLDivElement>
>
export const ContainerDocs: FC<ContainerDocsProps> = () => null
