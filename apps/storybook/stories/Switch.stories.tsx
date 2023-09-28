import { Background, Grid, Inline, Padding, Stack, Switch } from '@committed/ds'
import { useBoolean } from '@committed/hooks'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}
export default meta

export const Default: StoryObj<typeof Switch> = {}

export const Variants: StoryFn = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Inline>
      <Switch checked={value} onCheckedChange={toggle} />
      <Switch color="$primary" checked={value} onCheckedChange={toggle} />
    </Inline>
  )
}

export const Colors: StoryFn = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Padding p="$3">
      <Background bg="$surface.solid">
        <Inline>
          <Switch checked={value} onCheckedChange={toggle} />
          <Switch
            colorPalette="$primary"
            checked={value}
            onCheckedChange={toggle}
          />
          <Switch
            colorPalette="$secondary"
            checked={value}
            onCheckedChange={toggle}
          />
          <Switch
            colorPalette="$info"
            checked={value}
            onCheckedChange={toggle}
          />
          <Switch
            colorPalette="$error"
            checked={value}
            onCheckedChange={toggle}
          />
          <Switch
            colorPalette="$success"
            checked={value}
            onCheckedChange={toggle}
          />
        </Inline>
      </Background>
    </Padding>
  )
}

export const Disabled: StoryFn = () => (
  <Stack>
    <Inline>
      <Switch checked={false} />
      <Switch checked={true} />
      <Switch colorPalette="$primary" checked={false} />
      <Switch colorPalette="$primary" checked={true} />
      <Switch colorPalette="$secondary" checked={false} />
      <Switch colorPalette="$secondary" checked={true} />
    </Inline>
    <Inline>
      <Switch disabled checked={false} />
      <Switch disabled checked={true} />
      <Switch disabled colorPalette="$primary" checked={false} />
      <Switch disabled colorPalette="$primary" checked={true} />
      <Switch disabled colorPalette="$secondary" checked={false} />
      <Switch disabled colorPalette="$secondary" checked={true} />
    </Inline>
  </Stack>
)

export const States: StoryFn = () => {
  return (
    <>
      <Grid
        css={{
          p: '$4',
          gap: '$4',
          gridTemplateColumns:
            'token(sizes.$6) token(sizes.$6) token(sizes.$6)',
        }}
      >
        <Switch checked={false} />
        <Switch checked={false} data-hover />
        <Switch checked={false} data-focus />
        <Switch checked={true} />
        <Switch checked={true} data-hover />
        <Switch checked={true} data-focus />
        <Switch colorPalette="$primary" checked={false} />
        <Switch colorPalette="$primary" checked={false} data-hover />
        <Switch colorPalette="$primary" checked={false} data-focus />
        <Switch colorPalette="$primary" checked={true} />
        <Switch colorPalette="$primary" checked={true} data-hover />
        <Switch colorPalette="$primary" checked={true} data-focus />
        <Switch colorPalette="$secondary" checked={false} />
        <Switch colorPalette="$secondary" checked={false} data-hover />
        <Switch colorPalette="$secondary" checked={false} data-focus />
        <Switch colorPalette="$secondary" checked={true} />
        <Switch colorPalette="$secondary" checked={true} data-hover />
        <Switch colorPalette="$secondary" checked={true} data-focus />
        <Switch colorPalette="$error" checked={false} />
        <Switch colorPalette="$error" checked={false} data-hover />
        <Switch colorPalette="$error" checked={false} data-focus />
        <Switch colorPalette="$error" checked={true} />
        <Switch colorPalette="$error" checked={true} data-hover />
        <Switch colorPalette="$error" checked={true} data-focus />
      </Grid>
    </>
  )
}
