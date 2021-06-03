import React, { forwardRef } from 'react'
import { Button } from '../Button'
import { FirstPage, LastPage, NavigateBefore, NavigateNext } from '../Icons'
import { UsePaginationItem } from '.'
import { styled, CSS } from 'stitches.config'
import clsx from 'clsx'

export type PaginationItemProps = {
  /**
   * If `true`, the item will be disabled.
   */
  disabled?: boolean
  /**
   * The current page number.
   */
  page?: number
  /**
   * If `true` the pagination item is selected.
   */
  selected?: boolean
  /**
   * The type of pagination item.
   */
  type?: UsePaginationItem['type']
}

const rootStyles: CSS = {
  boxSizing: 'border-box',
  borderRadius: '$default',
  border: 'none',
  textAlign: 'center',
  minWidth: '$6',
  height: '$6',
  padding: '0 $2',
  margin: '0 $1',
  color: '$text',
}

const Ellipsis = styled('div', {
  ...rootStyles,
  height: 'auto',
  '&.disabled': {
    opacity: 0.5,
  },
})

type A = typeof Ellipsis['props']

const StyledButton = styled(Button, {
  ...rootStyles,
  '&.selected': {
    backgroundColor: '$selection',
    '&:hover, &.focusVisible': {
      backgroundColor: '$selection',
    },
    '&.disabled': {
      opacity: 0.8,
      backgroundColor: '$selection',
    },
  },
  '&.disabled': {
    opacity: 0.5,
  },
})

export const PaginationItem = forwardRef(function PaginationItem(
  props: PaginationItemProps,
  ref
) {
  const {
    disabled = false,
    page,
    selected = false,
    type = 'page',
    ...other
  } = props

  const normalizedIcons = {
    previous: NavigateBefore,
    next: NavigateNext,
    first: FirstPage,
    last: LastPage,
  }
  const Icon = normalizedIcons[type as keyof typeof normalizedIcons]

  return type === 'start-ellipsis' || type === 'end-ellipsis' ? (
    <Ellipsis ref={ref} className={clsx({ disabled })}>
      …
    </Ellipsis>
  ) : (
    <StyledButton ref={ref} {...other} className={clsx({ selected, disabled })}>
      {type === 'page' && page}
      {Icon ? <Icon /> : null}
    </StyledButton>
  )
})
