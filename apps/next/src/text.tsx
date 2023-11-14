import { Column, Row, Text } from '@committed/ds'
import { css } from '@committed/ds-ss'

export const TextExample = () => (
  <Column>
    <Text font="default">Default font is Inter</Text>
    <Text font="system">
      System uses the system font, so is platform dependent, should not be used
      were layout is critical.
    </Text>
    <Text font="monospace">
      Monospace font can be set here but a separate pre based component is also
      available.
    </Text>
    <Text font="display">
      An additional display font is also supplied. This is likely only for use
      in, say, website/blog post headings where a visual contrast is desired.
    </Text>

    <Row
      css={{
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'baseline',
      }}
    >
      <Text weight="light">Light</Text>
      <Text weight="bold">Bold</Text>
      <Text className={css({ textTransform: 'uppercase' })}>uppercase</Text>
      <Text className={css({ textTransform: 'capitalize' })}>capitalize</Text>
      <Text italic>Italic</Text>
      <Text className={css({ color: '$primary' })}>Primary</Text>
      <Text className={css({ color: '$textSecondary' })}>Secondary</Text>
      <Text asChild>
        <s>strikethrough</s>
      </Text>
      <Text
        asChild
        className={css({ textTransform: 'capitalize' })}
        weight="bold"
        italic
      >
        <s>multiple</s>
      </Text>
    </Row>
  </Column>
)
