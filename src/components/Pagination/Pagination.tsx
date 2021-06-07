import React from 'react'
import { Box } from '../Box'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from '../Icons'

const commonButton: React.ComponentProps<typeof Button>['css'] = {
  width: '1em',
}

const unclickableButton: React.ComponentProps<typeof Button>['css'] = {
  width: '1em',
  pointerEvents: 'none',
}

export interface PaginationProps {
  /**
    The total number of pages
  */
  count: number
  /**
    Callback fired when the page is changed
  */
  onPageChange?: (page: number) => void
  /**
    The current page
  */
  page?: number
  /**
    Number of always visible pages at the beginning and end.
  */
  boundaryCount?: number
  /**
    Number of always visible pages before and after the current page.
  */
  siblingCount?: number
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  onPageChange,
  page: pageOptional,
  boundaryCount: boundaryCountOptional,
  siblingCount: siblingCountOptional,
}) => {
  const page = pageOptional ?? 1
  const boundaryCount = boundaryCountOptional ?? 1
  const siblingCount = siblingCountOptional ?? 3
  const handlePageChange =
    onPageChange ??
    (() => {
      // do nothing
    })
  const pages: number[] = []
  for (let currentPage = 1; currentPage < count + 1; currentPage++) {
    if (
      Math.abs(currentPage - 1) <= boundaryCount ||
      Math.abs(currentPage - count) <= boundaryCount ||
      Math.abs(currentPage - page) <= siblingCount
    ) {
      pages.push(currentPage)
    }
  }
  const items: (
    | { type: 'page'; currentPage: number }
    | { type: 'ellipsis' }
  )[] = []
  let prevPage: number | null = null
  for (const page of pages) {
    if (prevPage != null && page - prevPage > 1) {
      items.push({ type: 'ellipsis' })
    }
    items.push({ type: 'page', currentPage: page })
    prevPage = page
  }

  return (
    <Box css={{ display: 'flex', justifyContent: 'flex-start', gap: '$3' }}>
      <ControlButton onClick={() => handlePageChange(Math.max(0, page - 1))}>
        <ChevronLeft />
      </ControlButton>
      {items.map((item, i) => {
        if (item.type === 'page') {
          const { currentPage } = item
          if (currentPage === page) {
            return <SelectedPage key={i} page={currentPage} />
          } else {
            return (
              <PageButton
                key={i}
                page={currentPage}
                onClick={() => {
                  console.log('page clicked')
                  handlePageChange(currentPage)
                }}
              />
            )
          }
        } else if (item.type === 'ellipsis') {
          return <Ellipsis key={i} />
        } else {
          return null
        }
      })}
      <ControlButton
        onClick={() => handlePageChange(Math.min(count, page + 1))}
      >
        <ChevronRight />
      </ControlButton>
    </Box>
  )
}

const PageButton: React.FC<
  {
    page: number
  } & React.ComponentProps<typeof Button>
> = ({ page, ...props }) => {
  return (
    <Button variant="tertiary" css={commonButton} {...props}>
      {page}
    </Button>
  )
}

const SelectedPage: React.FC<{ page: number }> = ({ page }) => {
  return (
    <Button
      variant="primary"
      css={{
        unclickableButton,
      }}
      tabIndex={-1}
    >
      {page}
    </Button>
  )
}

const ControlButton: React.FC<React.ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => {
  return (
    <Button variant="tertiary" css={commonButton} {...props}>
      {children}
    </Button>
  )
}

const Ellipsis = () => (
  <Button variant="tertiary" css={unclickableButton} tabIndex={-1}>
    …
  </Button>
)
