import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import { Checkbox, CheckedState } from '.'
import { Flex } from '../'
import { Variants } from '../../docs/util'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

export const Default = () => <Checkbox onCheckedChange={action('checked')} />

/**
 * A primary version for if the check is the main action.
 * (This probably doesn't happen very often.)
 *
 * Example with state - __Note__ the use of `onCheckedChange` to get the change notification from all triggering actions.
 * You can import the `CheckedState` to get the correct typing.
 */
export const Primary = () => {
  const [checked, setChecked] = useState<CheckedState>(false)
  return (
    <Checkbox
      css={{ m: '$3' }}
      checked={checked}
      variant="primary"
      onCheckedChange={setChecked}
    />
  )
}

export const Destructive = () => {
  return (
    <Flex>
      <Checkbox css={{ m: '$3' }} variant="primary" destructive />
      <Checkbox css={{ m: '$3' }} destructive />
    </Flex>
  )
}

/**
 * Checkbox also support a `indeterminate` checked state.
 * This can only be used in a controlled behaviour.
 */
export const Indeterminate = () => {
  const [checked, setChecked] = useState<CheckedState>('indeterminate')

  const rotate = () => {
    if (checked === 'indeterminate') {
      setChecked(true)
    } else if (checked) {
      setChecked(false)
    } else {
      setChecked('indeterminate')
    }
  }
  return (
    <Flex>
      <Checkbox
        css={{ m: '$3' }}
        checked={checked}
        variant="primary"
        onCheckedChange={rotate}
      />
      <Checkbox css={{ m: '$3' }} checked={checked} onCheckedChange={rotate} />
    </Flex>
  )
}

/**
 * The check box has a `label` prop to support adding a standard label.
 * If a custom label position or style is required use the `Label` component separately.
 */
export const WithLabel = () => (
  <Checkbox onCheckedChange={action('checked')} label="Checkbox" />
)

export const All = () => (
  <Variants
    component={Checkbox}
    css={{ m: '$3' }}
    variant={['primary', 'secondary']}
    destructive={[false, true]}
    disabled={[false, true]}
    checked={[false, true, 'indeterminate']}
  />
)
