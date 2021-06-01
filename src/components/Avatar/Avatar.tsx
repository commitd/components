import React from 'react'
import { styled, CSS } from 'stitches.config'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'

interface AvatarProps {
  src?: string
  alt?: string
  css?: CSS
  color?: CSS['color']
  backgroundColor?: CSS['backgroundColor']
}

const StyledRoot = styled(Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '$round',

  width: '$7',
  height: '$7',
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
