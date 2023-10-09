'use client'
import { Inline, Switch } from '@committed/ds'
import { useBoolean } from '@committed/hooks'

export const SwitchExample = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <>
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
        <Switch colorPalette="$info" checked={value} onCheckedChange={toggle} />
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
      <Inline>
        <Switch disabled checked={value} />
        <Switch disabled colorPalette="$primary" checked={value} />
        <Switch disabled colorPalette="$secondary" checked={value} />
        <Switch disabled colorPalette="$info" checked={value} />
        <Switch disabled colorPalette="$error" checked={value} />
        <Switch disabled colorPalette="$success" checked={value} />
      </Inline>
    </>
  )
}
