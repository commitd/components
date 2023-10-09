import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@committed/ds'
import { mdiComment } from '@mdi/js'

export const ListExample = () => (
  <List>
    <ListItem>
      <ListItemText text={`Line item 1`} subtext="Secondary item text" />
      <ListItemSecondaryAction path={mdiComment} />
    </ListItem>
    <ListItem>
      <ListItemText text={`Line item 2`} />
      <ListItemSecondaryAction path={mdiComment} />
    </ListItem>
  </List>
)
