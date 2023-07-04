import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import React, { ElementRef, forwardRef } from 'react'
import { cva, RecipeVariantProps } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'
import { SystemStyleObject } from '../../../styled-system/types'

const avatarRoot = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: 'round',
  },
  variants: {
    size: {
      small: { h: 5, w: 5 },
      medium: { h: 7, w: 7 },
      large: { h: 9, w: 9 },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const StyledRoot = styled(Root, avatarRoot)

const StyledImage = styled(
  Image,
  cva({
    base: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  })
)

const StyledFallback = styled(
  Fallback,
  cva({
    base: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)

type AvatarProps = RecipeVariantProps<typeof avatarRoot> & {
  src?: string
  alt?: string
  color?: SystemStyleObject['color']
  backgroundColor?: SystemStyleObject['backgroundColor']
  children?: React.ReactNode
}

/**
 * The Avatar should be used for profile images. If an image is not available initials can be used.
 */
export const Avatar = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  (
    {
      src,
      backgroundColor = 'grey5',
      color = 'text',
      alt = 'Avatar',
      children,
      ...props
    },
    forwardedRef
  ) => (
    <StyledRoot {...props} ref={forwardedRef}>
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
)
