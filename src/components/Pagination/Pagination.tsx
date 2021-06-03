import * as React from 'react'
import usePagination from './usePagination'
import { PaginationItem, UsePaginationProps, UsePaginationItem } from '.'
import { styled } from 'stitches.config'

export interface PaginationRenderItemParams extends UsePaginationItem {}

export interface PaginationProps extends UsePaginationProps {
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel?: (
    type: 'page' | 'first' | 'last' | 'next' | 'previous',
    page: number,
    selected: boolean
  ) => string
  /**
   * Render the item.
   *
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   */
  renderItem?: (params: PaginationRenderItemParams) => React.ReactNode
}

const StyledList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none',
})

function defaultGetAriaLabel(type: string, page: number, selected: boolean) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`
  }
  return `Go to ${type} page`
}

/**
 * Loosely based on [Material UI Pagination](https://material-ui.com/components/pagination/)
 */
export const Pagination = React.forwardRef(function Pagination(
  props: PaginationProps,
  ref
) {
  const {
    boundaryCount,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton,
    hidePrevButton,
    onChange,
    page,
    renderItem = (item) => <PaginationItem {...item} />,
    showFirstButton,
    showLastButton,
    siblingCount,
    ...other
  } = props

  const { items } = usePagination({ ...props, componentName: 'Pagination' })

  return (
    <nav aria-label="pagination navigation" {...other}>
      <StyledList>
        {items.map((item, index) => (
          <li key={index}>
            {renderItem({
              ...item,
            })}
          </li>
        ))}
      </StyledList>
    </nav>
  )
})
