import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { VariantProps } from '@stitches/react'
import React from 'react'
import type { CSS } from '../../stitches.config'
import { styled } from '../../stitches.config'

const StyledRoot = styled(Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '$round',

  variants: {
    size: {
      small: { size: '$5' },
      medium: { size: '$7' },
      large: { size: '$9' },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const StyledFallback = styled(Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

interface AvatarProps extends VariantProps<typeof StyledRoot> {
  src?: string
  alt?: string
  css?: CSS
  color?: CSS['color']
  backgroundColor?: CSS['backgroundColor']
}

/**
 * The Avatar should be used for profile images. If an image is not available initials can be used.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  backgroundColor = '$grey5',
  color = '$text',
  alt = 'Avatar',
  children,
  ...props
}) => (
  <StyledRoot {...props}>
    {src && <StyledImage alt={alt} src={src} />}
    <StyledFallback
      css={{
        backgroundColor,
        color,
      }}
    >
      {children}
    </StyledFallback>
  </StyledRoot>
)
Avatar.toString = () => `.${StyledRoot.className}`
