import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@committed/ds'
import { mdiComment } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  subcomponents: {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
  },
}

export default meta

export const Default: StoryFn = () => (
  <List>
    <ListItem>
      <ListItemText text="Item 1" />
    </ListItem>
    <ListItem>
      <ListItemText text="Item 2" />
    </ListItem>
  </List>
)

export const Interactive: StoryFn = () => (
  <List>
    <ListItem interactive onClick={action('Item 1')}>
      <ListItemText text={`Line item 1`} />
    </ListItem>
    <ListItem interactive onClick={action('Item 2')}>
      <ListItemText text={`Line item 2`} />
    </ListItem>
    <ListItem interactive disabled onClick={action('Item 3')}>
      <ListItemText text={`Line item 3`} />
    </ListItem>
  </List>
)

/** List items can be marked as selected and the color can be controlled through the css variable `--selectionColor` */
export const Selectable: StoryFn = () => {
  const [selected, setSelected] = React.useState('Item 1')
  return (
    <List>
      <ListItem
        interactive
        selected={selected === 'Item 1'}
        onClick={() => setSelected('Item 1')}
      >
        <ListItemText text={`Line item 1`} />
      </ListItem>
      <ListItem
        css={{ '--selectionColor': 'token(colors.$error.3)' }}
        interactive
        selected={selected === 'Item 2'}
        onClick={() => setSelected('Item 2')}
      >
        <ListItemText text={`Line item 2 (--selectionColor overwritten)`} />
      </ListItem>
      <ListItem
        interactive
        disabled
        selected={selected === 'Item 3'}
        onClick={() => setSelected('Item 3')}
      >
        <ListItemText text={`Line item 3`} />
      </ListItem>
    </List>
  )
}

export const WithBorder: StoryFn = () => (
  <List border>
    <ListItem>
      <ListItemText text="Item 1" />
    </ListItem>
    <ListItem>
      <ListItemText text="Item 2" />
    </ListItem>
  </List>
)

export const WithSecondaryActions: StoryFn = () => (
  <List>
    <ListItem>
      <ListItemText text={`Line item 1`} />
      <ListItemSecondaryAction
        path={mdiComment}
        onClick={action('Secondary Item 1')}
      />
    </ListItem>
    <ListItem>
      <ListItemText text={`Line item 2`} />
      <ListItemSecondaryAction
        path={mdiComment}
        onClick={action('Secondary Item 2')}
      />
    </ListItem>
  </List>
)

export const WithSubtext: StoryFn = () => (
  <List>
    <ListItem>
      <ListItemText text="Item 1" subtext="Secondary item text" />
    </ListItem>
    <ListItem>
      <ListItemText text="Item 2" subtext="Secondary item text" />
    </ListItem>
  </List>
)

// export const WithSwitches: StoryFn = () => (
//   <List>
//     <ListItem>
//       <ListItemIcon>
//         <Svg path={mdiWifi} />
//       </ListItemIcon>
//       <ListItemText text="Wi-Fi" />
//       <Switch />
//     </ListItem>
//     <ListItem>
//       <ListItemIcon>
//         <Svg path={mdiBluetooth} />
//       </ListItemIcon>
//       <ListItemText text="Bluetooth" />
//       <Switch />
//     </ListItem>
//   </List>
// )

export const WithCheckbox: StoryFn = () => (
  <List>
    <ListItem>
      <ListItemText text="Wi-Fi" />
      <Checkbox />
    </ListItem>
    <ListItem>
      <ListItemText text="Bluetooth" />
      <Checkbox />
    </ListItem>
  </List>
)
