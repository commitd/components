import React, { forwardRef } from 'react'
import { cva, cx } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'
import { RecipeVariantProps } from '../../../styled-system/types/recipe'
import { Prettify } from '../../utils'
import { buttonBaseStyle, buttonInteractionStyles } from '../Button/Button'
import { Svg } from '../Svg'

const DEFAULT_TAG = 'button'

export const iconButtonVariants = {
  variants: {
    variant: {
      primary: {
        '--active': 'token(colors.primaryActive)',
        '--lowlight': 'token(colors.primaryLowlight)',
        '--hover': 'var(--mainHover)',
        backgroundColor: 'var(--main)',
        color: 'var(--contrast)',
      },
      secondary: {
        borderColor: 'var(--default)',
        border: 'solid 2px',
        color: 'var(--default)',
        $$hover: 'var(--defaultHover)',
      },
      tertiary: {
        color: 'var(--default)',
        $$hover: 'var(--defaultHover)',
      },
    },
    destructive: {
      false: {},
      true: {
        '--main': 'token(colors.error)',
        '--mainHover': 'token(colors.errorHighlight)',
        '--contrast': 'token(colors.errorContrast)',
        '--active': 'token(colors.errorActive)',
        '--default': 'token(colors.error)',
        '--defaultHover': 'token(colors.errorBackground)',
        '--lowlight': 'token(colors.errorLowlight)',
      },
    },
    size: {
      small: {
        size: 5,
        '& > svg': {
          size: 4,
        },
      },
      default: {
        size: 6,
      },
      large: {
        size: 7,
        '& > svg': {
          size: 6,
        },
      },
    },
  },
}

const iconButton = cva({
  base: {
    ...buttonBaseStyle,
    ...buttonInteractionStyles,
  },
  ...iconButtonVariants,
  defaultVariants: {
    variant: 'secondary',
    destructive: false,
    size: 'default',
  },
})

export const StyledIconButton = styled(DEFAULT_TAG, iconButton)

type IconButtonVariants = RecipeVariantProps<typeof iconButton>
type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
type StyledIconButtonProps = ButtonProps &
  IconButtonVariants & {
    className?: string
    // override the incorrectly inferred type from HTMLProps
    type?: 'button' | 'reset' | 'submit'
    /** Add a title */
    title?: string
    /** Add the given svg path  */
    path?: string
  }

type IconButtonProps = Prettify<StyledIconButtonProps>

export const ICON_BUTTON_CLASS = 'c-icon-button'

/**
 * IconButton can be used to wrap custom `Svg` icons or use the `path` prop to supply a standard mdi icon.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, title, path, children, ...props }, forwardedRef) => (
    <StyledIconButton
      className={cx(ICON_BUTTON_CLASS, className)}
      {...props}
      ref={forwardedRef}
    >
      {path ? <Svg path={path} title={title} /> : children}
    </StyledIconButton>
  )
)
