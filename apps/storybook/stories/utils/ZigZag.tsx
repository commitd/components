import { Box } from '@committed/ds'
import { css, cx } from '@committed/ds-ss'
import { ComponentProps, FC } from 'react'

export const zigzag = css({
  padding: '$3',
  backgroundImage:
    'linear-gradient(135deg, token(colors.$primary.6) 25%, transparent 25%), linear-gradient(225deg, token(colors.$primary.6) 25%, transparent 25%), linear-gradient(45deg, token(colors.$primary.6) 25%, transparent 25%), linear-gradient(315deg, token(colors.$primary.6) 25%, token(colors.$neutral.3) 25%)',
  backgroundPosition: '13px 0, 13px 0, 0 0, 0 0',
  backgroundSize: '26px 26px',
  backgroundRepeat: 'repeat',
})

export const ZigZag: FC<ComponentProps<typeof Box>> = ({
  children,
  className,
  ...props
}) => (
  <Box className={cx(zigzag, className)} {...props}>
    {children}
  </Box>
)
