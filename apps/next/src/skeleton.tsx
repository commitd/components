import { Inline, Skeleton } from '@committed/ds'

export const SkeletonExample = () => (
  <>
    <Inline>
      <Skeleton variant="heading" />
    </Inline>
    <Inline>
      <Skeleton variant="avatar" size="small" />
      <Skeleton variant="avatar" />
      <Skeleton variant="avatar" size="large" />
    </Inline>
    <Inline>
      <Skeleton variant="button" size="small" />
      <Skeleton variant="button" />
      <Skeleton variant="button" size="large" />
    </Inline>
  </>
)
