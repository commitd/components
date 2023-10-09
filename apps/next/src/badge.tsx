import { Badge, Heading, Inline } from '@committed/ds'

export const BadgeExample = () => (
  <Inline wrap spacing="large">
    <Badge content={'text'}>
      <Heading variant="h6">Default</Heading>
    </Badge>
    <Badge variant="primary" content={9} max={99}>
      <Heading variant="h6">Primary</Heading>
    </Badge>
    <Badge variant="ghost" content={99} max={99}>
      <Heading variant="h6">Ghost</Heading>
    </Badge>
    <Badge variant="secondary" content={999} max={99}>
      <Heading variant="h6">Secondary</Heading>
    </Badge>
    <Badge variant="error" content={9999} max={99}>
      <Heading variant="h6">Error</Heading>
    </Badge>
    <Badge variant="success" content={99999} max={99}>
      <Heading variant="h6">Success</Heading>
    </Badge>
    <Badge variant="info" content={999999} max={99}>
      <Heading variant="h6">Warning</Heading>
    </Badge>
  </Inline>
)
