'use client'

import {
  RecipeVariantProps,
  SystemStyleObject,
  cva,
  styled,
} from '@committed/ds-ss'
import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import React from 'react'
import { PickProps, Prettify, forwardRefExtend } from '../../utils'

const avatarRoot = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: '$round',
  },
  variants: {
    size: {
      small: { h: '$5', w: '$5' },
      medium: { h: '$7', w: '$7' },
      large: { h: '$9', w: '$9' },
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
  }),
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
  }),
)

type AvatarProps = Prettify<
  RecipeVariantProps<typeof avatarRoot> &
    PickProps<typeof StyledRoot, 'color' | 'backgroundColor'> &
    PickProps<typeof Image, 'src' | 'alt'> & {
      className?: string
      css?: SystemStyleObject
      children?: React.ReactNode
    }
>

/**
 * The Avatar should be used for profile images. If an image is not available initials can be used.
 */
export const Avatar = forwardRefExtend<typeof Root, AvatarProps>(
  (
    {
      src,
      backgroundColor = '$neutral.5',
      color = '$text',
      alt = 'Avatar',
      children,
      ...props
    },
    forwardedRef,
  ) => (
    <StyledRoot {...props} ref={forwardedRef}>
      <StyledImage alt={alt} src={src} />
      <StyledFallback backgroundColor={backgroundColor} color={color}>
        {children}
      </StyledFallback>
    </StyledRoot>
  ),
)
Avatar.displayName = 'Avatar'
