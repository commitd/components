import { Box } from '@committed/ds'
import { SystemStyleObject, cva, styled } from '@committed/ss'
import { CSSProperties } from 'react'
import { randomColor } from './randomColor'

const StyledBox = styled(
  Box,
  cva({
    base: {
      minWidth: '$5',
      minHeight: '$5',
      p: '$2',
      border: '2px solid token(colors.$neutral.5)',
    },
  }),
)

export const ExampleComponent = ({
  style,
  ...props
}: {
  style?: CSSProperties
  css?: SystemStyleObject
  children?: React.ReactNode
}) => (
  <StyledBox
    {...props}
    style={{
      backgroundColor: randomColor(),
      ...style,
    }}
  />
)
