import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import { Box } from '../Box'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from '../Icons'

const commonButton: CSS = {
  width: '1em',
}

export interface PaginationProps {
  /*
    The total number of pages
  */
  count: number
  /*
    Callback fired when the page is changed
  */
  onChange?: (event: React.MouseEvent, page: number) => void
  /*
    The current page
  */
  page?: number
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  onChange = () => {},
  page = 1,
}) => {
  const items: React.ReactElement[] = []
  for (let currentPage: number = 1; currentPage < count + 1; currentPage++) {
    if (currentPage === page) {
      items.push(<SelectedPage page={currentPage} />)
    } else {
      items.push(
        <PageButton
          page={currentPage}
          onClick={(e) => onChange(e, currentPage)}
        />
      )
    }
  }

  return (
    <Box css={{ display: 'flex', justifyContent: 'flex-start', gap: '$3' }}>
      <ControlButton onClick={(e) => onChange(e, Math.max(0, page - 1))}>
        <ChevronLeft />
      </ControlButton>
      {items}
      <ControlButton onClick={(e) => onChange(e, Math.min(count, page + 1))}>
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
    <Button css={{ ...commonButton }} {...props}>
      {page}
    </Button>
  )
}

const SelectedPage: React.FC<{ page: number }> = ({ page }) => {
  return (
    <Button
      variant="primary"
      css={{
        ...commonButton,
        // background: '$primaryActive',
        border: '2px solid transparent',
      }}
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
    <Button css={{ ...commonButton }} {...props}>
      {children}
    </Button>
  )
}
