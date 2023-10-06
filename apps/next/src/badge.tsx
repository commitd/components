import { Badge, Heading, Inline } from '@committed/ds'

export const BadgeExample = () => (
  <Inline>
    <Badge content={'text'}>
      <Heading variant="h5">Default</Heading>
    </Badge>
    <Badge variant="primary" content={9} max={99}>
      <Heading variant="h5">Primary</Heading>
    </Badge>
    <Badge variant="ghost" content={99} max={99}>
      <Heading variant="h5">Ghost</Heading>
    </Badge>
    <Badge variant="secondary" content={999} max={99}>
      <Heading variant="h5">Secondary</Heading>
    </Badge>
    <Badge variant="error" content={9999} max={99}>
      <Heading variant="h5">Error</Heading>
    </Badge>
    <Badge variant="success" content={99999} max={99}>
      <Heading variant="h5">Success</Heading>
    </Badge>
    <Badge variant="info" content={999999} max={99}>
      <Heading variant="h5">Warning</Heading>
    </Badge>
  </Inline>
)
