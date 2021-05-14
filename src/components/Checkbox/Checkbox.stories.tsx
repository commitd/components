import React, { useState, ChangeEventHandler } from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from '.'
import { Variants } from '../../docs/util'
import { Flex } from '../'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta
const click = action('clicked')

export const Default = () => <Checkbox onCheckedChange={action('checked')} />

/**
 * A primary version for if the check is the main action.
 * (This probably doesn't happen very often.)
 *
 *  Example with state - __Note__ the use of `onCheckedChange` to get the change notification from all triggering actions.
 */
export const Primary = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      css={{ m: '$3' }}
      checked={checked}
      variant="primary"
      onCheckedChange={(event) => {
        click(event)
        setChecked(!checked)
      }}
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
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(
    'indeterminate'
  )

  const rotate: ChangeEventHandler<HTMLInputElement> = (e) => {
    click(e)
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
