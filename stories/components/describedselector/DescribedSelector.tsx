import {
  makeStyles,
  Text,
  Flex,
  Box,
  Radio,
  ListProps,
  Theme,
  Heading,
  List,
  ListItem,
  Palette,
} from '../../../src'
import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'
import tinycolor from 'tinycolor2'

export interface Described<I> {
  title: string
  content: string
  item: I
}

interface DescribedSelectorProps<I> extends ListProps {
  describedItems: Described<I>[]
  onSelectItem: (describedItems: Described<I>) => void
  selected?: I
  selectionColor: keyof Palette
}

const useStyles = makeStyles<Theme, { selectionColor: string }>((theme) => {
  return {
    item: {
      background: theme.palette.background.paper,
    },
    selectedItem: {
      borderRadius: theme.shape.borderRadius,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: ({ selectionColor }) =>
        theme.palette[selectionColor].contrastText,
      background: ({ selectionColor }) =>
        tinycolor(theme.palette[selectionColor].light).lighten(20).toString(),

      color: ({ selectionColor }) => theme.palette[selectionColor].contrastText,
      zIndex: 1,
    },
  }
})

export const DescribedSelector = <I,>({
  describedItems,
  onSelectItem,
  selected,
  selectionColor = 'brand',
  ...flexProps
}: PropsWithChildren<DescribedSelectorProps<I>>) => {
  const classes = useStyles({ selectionColor })
  return (
    <List {...flexProps}>
      {describedItems.map((r) => (
        <ListItem
          button
          key={r.title}
          className={clsx(
            classes.item,
            selected === r.item && classes.selectedItem
          )}
          onClick={() => onSelectItem(r)}
        >
          <Flex pl={3}>
            <Radio
              checked={selected === r.item}
              onChange={() => onSelectItem(r)}
              name={r.title}
              inputProps={{ 'aria-label': r.title }}
            />
            <Box padding={3}>
              <Heading.h4 mb={2}>{r.title}</Heading.h4>
              <Text variant="subtitle1">{r.content}</Text>
            </Box>
          </Flex>
        </ListItem>
      ))}
    </List>
  )
}
