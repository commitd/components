import { Breadcrumbs, Crumb } from '@committed/ds'

export const BreadcrumbsExample = () => (
  <Breadcrumbs>
    <Crumb href="/">Home</Crumb>
    <Crumb href="/first">First</Crumb>
    <Crumb href="/first/second" isCurrentPage>
      Second
    </Crumb>
  </Breadcrumbs>
)
