import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { css } from '../../../styled-system/css'
import { withClasses } from '../../utils'
import { Link, LinkProps } from '../Link'

const BREADCRUMB_TAG = 'nav'
const BREADCRUMB_LIST_TAG = 'ol'
const CRUMB_TAG = 'li'

/**
 * StyledBreadcrumbs base component
 */
const StyledBreadcrumbs = withClasses(BREADCRUMB_TAG, 'c-breadcrumbs')
const BreadcrumbList = withClasses(
  BREADCRUMB_LIST_TAG,
  css({
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  })
)

const StyledCrumb = withClasses(
  CRUMB_TAG,
  css({
    display: 'inline',
    '--spacing': 'token(spacing.3)',

    '&:not(:first-of-type)': {
      marginLeft: 'var(--spacing)',
    },
    '&:not(:first-of-type)::before': {
      content: '',
      opacity: 0.25,
      marginRight: 'var(--spacing)',
      display: 'inline-block',
      transform: 'rotate(15deg)',
      borderRight: '1px solid',
      height: '0.8em',
    },
  })
)

type BreadcrumbsProps = ComponentProps<typeof BREADCRUMB_TAG>

export const Breadcrumbs = forwardRef<
  ElementRef<typeof StyledBreadcrumbs>,
  BreadcrumbsProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledBreadcrumbs aria-label="Breadcrumb" {...props} ref={forwardedRef}>
      <BreadcrumbList>{children}</BreadcrumbList>
    </StyledBreadcrumbs>
  )
})

export type CrumbProps = LinkProps & {
  isCurrentPage?: boolean
}

export const Crumb = ({
  isCurrentPage = false,
  children,
  ...props
}: CrumbProps) => {
  return (
    <StyledCrumb>
      <Link
        variant={isCurrentPage ? 'clear' : 'hovered'}
        aria-current={isCurrentPage ? 'page' : undefined}
        {...props}
      >
        {children}
      </Link>
    </StyledCrumb>
  )
}
