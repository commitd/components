import { css } from '@committed/ss'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { component } from '../../utils'
import { Link, LinkProps } from '../Link'
const BREADCRUMB_TAG = 'nav'
const BREADCRUMB_LIST_TAG = 'ol'
const CRUMB_TAG = 'li'

/**
 * StyledBreadcrumbs base component
 */
const StyledBreadcrumbs = component(BREADCRUMB_TAG, 'c-breadcrumbs')
const BreadcrumbList = component(
  BREADCRUMB_LIST_TAG,
  css({
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  }),
)
BreadcrumbList.displayName = 'BreadcrumbList'

const StyledCrumb = component(
  CRUMB_TAG,
  css({
    display: 'inline',

    '&:not(:first-of-type)': {
      marginLeft: 'token(spacing.$3)',
    },
    '&:not(:first-of-type)::before': {
      // https://github.com/chakra-ui/panda/issues/1122
      content: `''`,
      opacity: 0.25,
      marginRight: 'token(spacing.$3)',
      display: 'inline-block',
      transform: 'rotate(15deg)',
      borderRight: '1px solid',
      height: '0.8em',
    },
  }),
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
Breadcrumbs.displayName = 'Breadcrumbs'

export type CrumbProps = LinkProps & {
  isCurrentPage?: boolean
}

export const Crumb = ({
  isCurrentPage = false,
  children,
  ...props
}: CrumbProps) => {
  const variant = isCurrentPage ? 'clear' : 'hovered'
  const current = isCurrentPage ? 'page' : undefined
  return (
    <StyledCrumb>
      <Link variant={variant} aria-current={current} {...props}>
        {children}
      </Link>
    </StyledCrumb>
  )
}
Crumb.displayName = 'Crumb'
