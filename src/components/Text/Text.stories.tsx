import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Caption, Monospace, Paragraph, Span, Strike, Text } from '.'
import { Column, Row } from '../'
import { styled } from '../../stitches.config'

export default {
  title: 'Components/Text',
  component: Text,
  subcomponents: { Paragraph, Monospace, Caption, Span, Strike },
  argTypes: {
    size: {
      control: { type: 'range', min: -2, max: 8, step: 1 },
    },
    weight: {
      control: {
        type: 'radio',
        options: ['light', 'regular', 'bold'],
      },
    },
    font: {
      control: {
        type: 'radio',
        options: ['default', 'system', 'display', 'monospace'],
      },
    },
    italic: {
      control: {
        type: 'boolean',
      },
    },
    nowrap: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof Text>> = (args) => (
  <Text {...args}>
    This is the regular text using the default settings in a longer paragraph,
    the sort you might read in a blog post. The reason we are using prose here
    is because the most common use case for this container size is long form
    text. So we're previewing some longform text here so we can make sure the
    container width provides an optimal line length for this font size.
  </Text>
)
export const Default = Template.bind({})

/**
 * The text is available in 11 size ranging from `-2` to `8` with 0 the default.
 */
export const Size = () => (
  <Column>
    <Text size={-2}>Size -2</Text>
    <Text size={-1}>Size -1</Text>
    <Text size={0}>Size 0 (Default)</Text>
    <Text size={1}>Size 1</Text>
    <Text size={2}>Size 2</Text>
    <Text size={3}>Size 3</Text>
    <Text size={4}>Size 4</Text>
    <Text size={5}>Size 5</Text>
    <Text size={6}>Size 6</Text>
    <Text size={7}>Size 7</Text>
    <Text size={8}>Size 8</Text>
  </Column>
)

/**
 * Light, regular and bold can be set with the weight prop. The fonts are supplied in these weights.
 * Other weights can be set through the css if required.
 */
export const Weight = () => (
  <Row css={{ justifyContent: 'space-between' }}>
    <Text weight="light">Light text</Text>
    <Text weight="regular">Regular text</Text>
    <Text weight="bold">Bold text</Text>
  </Row>
)

/**
 * A set of fonts for most use cases is supplied.
 */
export const Fonts = () => (
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
  </Column>
)

/**
 * Demonstration of how different styles can be achieved.
 */
export const Variations = () => (
  <Row
    css={{
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'baseline',
    }}
  >
    <Text weight="light">Light</Text>
    <Text weight="bold">Bold</Text>
    <Text css={{ textTransform: 'uppercase' }}>uppercase</Text>
    <Text css={{ textTransform: 'capitalize' }}>capitalize</Text>
    <Text italic>Italic</Text>
    <Text css={{ color: '$primary' }}>Primary</Text>
    <Text css={{ color: '$textSecondary' }}>Secondary</Text>
    <Text as="s">strikethrough</Text>
    <Text as="s" css={{ textTransform: 'capitalize' }} weight="bold" italic>
      multiple
    </Text>
  </Row>
)

/**
 * Text components use span by default, but have display block. The Span component has the display set to inline so is better suited to nested bits of text.
 */
export const Inline = () => (
  <Row
    css={{
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: '$4',
    }}
  >
    <Text>
      This is <Text weight="light">Light</Text> text
    </Text>
    <Text>
      This is <Span weight="bold">Bold</Span> text
    </Text>
    <Text>
      This is <Span css={{ textTransform: 'uppercase' }}>uppercase</Span> text
    </Text>
    <Text>
      This is <Span css={{ textTransform: 'capitalize' }}>capitals</Span> text
    </Text>
    <Text>
      This is <Span italic>Italic</Span> text
    </Text>
    <Text>
      This is <Monospace inline>monospaced</Monospace> text
    </Text>
    <Text>
      This is <Span css={{ color: '$primary' }}>Primary</Span> text
    </Text>
    <Text>
      This is <Span css={{ color: '$textSecondary' }}>Secondary</Span> text
    </Text>
    <Text>
      This is <Strike>strikethrough</Strike> text
    </Text>
    <Text>
      This is{' '}
      <Text as="s" weight="bold" italic>
        multiple
      </Text>{' '}
      text
    </Text>
  </Row>
)

/** A `nowrap` prop adds style to truncate the text with elipsis. */
export const NoWrap = () => (
  <Text nowrap>
    This long line should be truncated, consectetur adipiscing elit. Nam
    bibendum, nisl a fermentum viverra, diam urna efficitur ante, sit amet
    condimentum dolor tellus in augue. Vivamus eu nulla risus. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Quisque nec purus mi. Morbi pretium
    massa sem, ac semper elit dictum in. Suspendisse hendrerit lorem quis
    lobortis pellentesque. Ut blandit efficitur urna eu fermentum. Phasellus
    venenatis pretium quam, eget elementum enim congue non. Nunc vitae quam
    semper, mollis augue ac, facilisis sem. Sed justo urna, accumsan nec congue
    eu, hendrerit vel purus. Maecenas ultricies luctus nisi a pharetra.
  </Text>
)

/**
 * A paragraph component is supplied to use the `<p>` tag.
 */
export const ParagraphStory: Story = () => (
  <>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum,
      nisl a fermentum viverra, diam urna efficitur ante, sit amet condimentum
      dolor tellus in augue. Vivamus eu nulla risus. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Quisque nec purus mi. Morbi pretium massa
      sem, ac semper elit dictum in. Suspendisse hendrerit lorem quis lobortis
      pellentesque. Ut blandit efficitur urna eu fermentum. Phasellus venenatis
      pretium quam, eget elementum enim congue non. Nunc vitae quam semper,
      mollis augue ac, facilisis sem. Sed justo urna, accumsan nec congue eu,
      hendrerit vel purus. Maecenas ultricies luctus nisi a pharetra.
    </Paragraph>
    <Paragraph>
      Aenean nec pretium turpis, et vulputate libero. Sed pharetra risus elit.
      Vivamus quis facilisis felis, at mollis tortor. Duis enim massa, lobortis
      eget semper sit amet, tristique nec lacus. Ut malesuada odio consectetur
      lobortis iaculis. Vestibulum elementum, turpis et venenatis aliquam, urna
      neque iaculis erat, a pellentesque ex nibh eu mi. Quisque id vehicula
      ipsum. Ut lacinia egestas congue. Curabitur laoreet tortor sapien, vitae
      ornare sem porttitor sit amet. Cras congue lorem ullamcorper, venenatis mi
      id, suscipit nisl.
    </Paragraph>
    <Paragraph>
      Suspendisse gravida sed ipsum a malesuada. Nulla facilisi. Suspendisse
      mollis purus eget risus mattis facilisis. Pellentesque eu est efficitur,
      porttitor justo vel, mollis felis. Morbi et tortor nulla. Nullam mattis
      quis arcu nec dignissim. Nam malesuada, lorem id gravida ultricies, odio
      libero blandit sem, quis dictum mi neque eget justo. Nulla ultrices, nunc
      sit amet luctus facilisis, mi augue viverra metus, ac eleifend risus nibh
      nec est. Maecenas sit amet rhoncus turpis. Sed ac arcu id diam tincidunt
      porta pulvinar vel enim.
    </Paragraph>
    <Paragraph>
      Phasellus quis hendrerit nisl, sit amet hendrerit est. Sed vitae eleifend
      augue. Donec imperdiet, magna sit amet tempus tristique, ante mi rhoncus
      eros, nec porttitor erat turpis eget justo. Nulla non aliquam tellus, sed
      hendrerit urna. Aliquam purus arcu, tempor nec lacinia ac, vulputate et
      nibh. Praesent vitae leo lacus. Mauris elementum vitae eros id congue.
      Integer dapibus bibendum diam, a aliquet nunc. Aliquam erat volutpat. Duis
      aliquam vel nunc vitae pulvinar. Cras justo ipsum, suscipit ac imperdiet
      hendrerit, pharetra sit amet est. Quisque nec nisi erat. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Aliquam iaculis rhoncus
      condimentum.
    </Paragraph>
    <Paragraph>
      Integer semper massa vitae lorem ullamcorper faucibus. Suspendisse augue
      diam, viverra id molestie quis, semper vel velit. Vivamus ac porttitor
      nibh, ut sollicitudin neque. Cras viverra pretium eros ac condimentum. Sed
      eget nunc faucibus, luctus justo id, commodo erat. Nulla vestibulum
      hendrerit tellus at tincidunt. Suspendisse erat felis, venenatis sed
      turpis id, efficitur elementum libero. Integer convallis in est vel
      euismod. Curabitur vitae orci vitae justo venenatis rhoncus. Donec eget
      lorem efficitur, posuere velit quis, egestas nisi. Vivamus non lacus a
      turpis blandit sodales vitae nec lacus.
    </Paragraph>
  </>
)
ParagraphStory.parameters = {
  title: 'Paragraph',
}

/**
 * Caption component uses a smaller font and the tag can still be configured using `as` so it can be set to `caption`, `figcaption` etc. as required.
 */
export const CaptionStory = () => <Caption>To be used for captions</Caption>
CaptionStory.parameters = {
  title: 'Caption',
}

/**
 * Monospace component uses the monospace font and `pre` tag
 */
export const MonospaceStory = () => (
  <Monospace>To be used for pre components, uses the monospace font.</Monospace>
)
MonospaceStory.parameters = {
  title: 'Monospace',
}

const Wrapper = styled(Column, {
  [`& ${Paragraph}`]: {
    color: '$success9',
  },
  [`& ${Caption}`]: {
    color: '$error9',
  },
})

/**
 * Testing toString on components
 */
export const NestingClassNameTest = () => (
  <Wrapper>
    <Text>This Text should NOT be styled</Text>
    <Paragraph>This Paragraph should be styled</Paragraph>
    <Caption>This Caption should be styled differently</Caption>
  </Wrapper>
)

NestingClassNameTest.parameters = {
  docs: {
    source: {
      code: `
const Wrapper = styled(Column, {
  [\`& \${Paragraph}\`]: {
    color: '$success9',
  },
  [\`& \${Caption}\`]: {
    color: '$error9',
  },
})

export const NestingClassNameTest = () => (
  <Wrapper>
    <Text>This Text should NOT be styled</Text>
    <Paragraph>This Paragraph should be styled</Paragraph>
    <Caption>This Caption should be styled differently</Caption>
  </Wrapper>
)
  `,
    },
  },
}
