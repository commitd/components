import { css } from '@committed/ds-ss'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { component, forwardRefDefine } from '../../utils'
import { Link } from '../Link'
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

export type CrumbProps = ComponentProps<typeof Link> & {
  isCurrentPage?: boolean
}

export const Crumb = forwardRefDefine<typeof Link, CrumbProps>(
  ({ isCurrentPage = false, children, ...props }, forwardedRef) => {
    const variant = isCurrentPage ? 'clear' : 'hovered'
    const current = isCurrentPage ? 'page' : undefined
    return (
      <StyledCrumb>
        <Link
          variant={variant}
          aria-current={current}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </Link>
      </StyledCrumb>
    )
  },
)
Crumb.displayName = 'Crumb'
