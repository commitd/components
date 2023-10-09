import { Container } from '@committed/ds'

export const ContainerExample = () => (
  <Container
    maxWidth="responsive"
    css={{
      backgroundColor: {
        xl: '$warning.5',
        lg: '$success.5',
        md: '$info.5',
        sm: '$error.5',
        base: '$primary.5',
      },
      py: '$3',
      textAlign: 'center',
    }}
  >
    Container
  </Container>
)
