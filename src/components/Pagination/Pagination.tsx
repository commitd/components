import React, { ComponentProps, useCallback, useMemo } from 'react'
import { styled } from '../../stitches.config'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from '../Icons'
import { Inline } from '../Inline'

const CommonButton = styled(Button, {
  width: '1em',
})

const UnclickableButton = styled(Button, {
  width: '1em',
  pointerEvents: 'none',
})

type InlineProps = ComponentProps<typeof Inline>

export interface PaginationProps
  extends Pick<InlineProps, 'align' | 'spacing'> {
  /**
    The total number of pages
    @deprecated use totalPages
  */
  count?: number
  /**
    The total number of pages
  */
  totalPages: number
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
  /**
    What to do if only one page
  */
  single?: 'show' | 'hide' | 'none'
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  totalPages,
  onPageChange,
  page: pageOptional,
  boundaryCount: boundaryCountOptional,
  siblingCount: siblingCountOptional,
  single = 'hide',
  ...inlineProps
}) => {
  if (totalPages == undefined && count != undefined) {
    totalPages = count
  }

  const page = pageOptional ?? 1
  const boundaryCount = boundaryCountOptional ?? 2
  const siblingCount = siblingCountOptional ?? 3

  const handlePrevious = useCallback(() => {
    onPageChange?.(Math.max(0, page - 1))
  }, [onPageChange, page])
  const handleNext = useCallback(() => {
    onPageChange?.(Math.min(totalPages, page + 1))
  }, [onPageChange, page, totalPages])
  const handleSet = useCallback(
    (newPage: number) => {
      onPageChange?.(newPage)
    },
    [onPageChange]
  )

  const items = useMemo(() => {
    const pages: number[] = []
    const maxPages = Math.min(
      2 * (boundaryCount + siblingCount) + 1,
      totalPages
    )
    for (let currentPage = 1; currentPage < totalPages + 1; currentPage++) {
      if (
        totalPages <= maxPages + 2 ||
        (page <= boundaryCount + siblingCount + 1 &&
          currentPage < maxPages - boundaryCount + 2) ||
        (page >= totalPages - boundaryCount - siblingCount - 1 &&
          totalPages - currentPage <= maxPages - boundaryCount) ||
        Math.abs(currentPage) <= boundaryCount ||
        Math.abs(currentPage - totalPages) < boundaryCount ||
        Math.abs(currentPage - page) <= siblingCount
      ) {
        pages.push(currentPage)
      }
    }
    const items = []
    let prevPage: number | null = null
    for (const page of pages) {
      if (prevPage != null && page - prevPage > 1) {
        items.push({ type: 'ellipsis', currentPage: page - 1 })
      }
      items.push({ type: 'page', currentPage: page })
      prevPage = page
    }
    return items
  }, [boundaryCount, totalPages, page, siblingCount])

  const visibility = useMemo(() => {
    if (totalPages <= 1) {
      switch (single) {
        case 'show':
          return {}
        case 'hide':
          return { visibility: 'hidden' }
        case 'none':
          return { display: 'none' }
        default:
          return {}
      }
    }
    return {}
  }, [single, totalPages])

  return (
    <Inline {...inlineProps} css={{ ...visibility }}>
      <ControlButton disabled={page === 1} onClick={handlePrevious}>
        <ChevronLeft />
      </ControlButton>
      {items.map((item) => {
        const { type, currentPage } = item
        if (type === 'page') {
          if (currentPage === page) {
            return <SelectedPage key={currentPage} page={currentPage} />
          } else {
            return (
              <PageButton
                key={currentPage}
                page={currentPage}
                onSetPage={handleSet}
              />
            )
          }
        } else if (type === 'ellipsis') {
          return <Ellipsis key={currentPage} />
        } else {
          return null
        }
      })}
      <ControlButton disabled={page === totalPages} onClick={handleNext}>
        <ChevronRight />
      </ControlButton>
    </Inline>
  )
}

const PageButton: React.FC<
  React.ComponentProps<typeof Button> & {
    page: number
    onSetPage: (page: number) => void
  }
> = ({ page, onSetPage, ...props }) => {
  const onClick = useCallback(() => onSetPage(page), [onSetPage, page])
  return (
    <CommonButton variant="tertiary" {...props} onClick={onClick}>
      {page}
    </CommonButton>
  )
}

const SelectedPage: React.FC<{ page: number }> = ({ page }) => {
  return (
    <UnclickableButton variant="primary" tabIndex={-1}>
      {page}
    </UnclickableButton>
  )
}

const ControlButton: React.FC<React.ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => {
  return (
    <CommonButton variant="tertiary" {...props}>
      {children}
    </CommonButton>
  )
}

const Ellipsis = () => (
  <UnclickableButton variant="tertiary" tabIndex={-1}>
    …
  </UnclickableButton>
)
