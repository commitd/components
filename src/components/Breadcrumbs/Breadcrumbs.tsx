import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { CSSProps, styled, VariantProps } from '../../stitches.config'
import { Link, LinkProps } from '../Link'

const BREADCRUMB_TAG = 'nav'
const BREADCRUMB_LIST_TAG = 'ol'
const CRUMB_TAG = 'li'

/**
 * StyledBreadcrumbs base component
 */
const StyledBreadcrumbs = styled(BREADCRUMB_TAG, {})
const BreadcrumbList = styled(BREADCRUMB_LIST_TAG, {
  padding: 0,
  margin: 0,
  listStyleType: 'none',
})

const StyledCrumb = styled(CRUMB_TAG, {
  display: 'inline',
  $$spacing: '$space$3',

  '&:not(:first-of-type)': {
    marginLeft: '$$spacing',

    '&::before': {
      content: '',
      opacity: 0.25,
      marginRight: '$$spacing',
      display: 'inline-block',
      transform: 'rotate(15deg)',
      borderRight: '1px solid',
      height: '0.8em',
    },
  },
})

type BreadcrumbsVariants = VariantProps<typeof StyledBreadcrumbs>
type BreadcrumbsProps = BreadcrumbsVariants &
  CSSProps &
  ComponentProps<typeof BREADCRUMB_TAG>

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
Breadcrumbs.toString = () => `.${StyledBreadcrumbs.className}`

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
