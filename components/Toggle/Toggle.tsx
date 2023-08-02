import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { Root } from '@radix-ui/react-toggle'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { buttonBaseStyle, buttonInteractionStyles } from '../Button/Button'

const toggle = cva({
  base: {
    ...buttonBaseStyle,
    ...buttonInteractionStyles,

    '--main': 'token(colors.$primary)',
    '--mainHover': 'token(colors.$primaryHighlight)',
    '--contrast': 'token(colors.$primaryContrast)',
    '--active': 'token(colors.$defaultActive)',
    '--default': 'token(colors.$default)',
    '--defaultHover': 'token(colors.$defaultHighlight)',
    '--lowlight': 'token(colors.$defaultLowlight)',
    '--onBackgroundColor': 'token(color.$defaultHighlight)',
    '--onColor': '--main',

    '&[data-state=on]': {
      backgroundColor: 'var(--onBackgroundColor)',
      color: 'var(--onColor)',
      '--hover': 'var(--defaultHover)',
    },
  },
  variants: {
    variant: {
      primary: {
        '--lowlight': 'token(colors.$primaryLowlight)',
        '--hover': 'var(--mainHover)',
        backgroundColor: 'var(--main)',
        color: 'var(--contrast)',
        '--onBackgroundColor': 'var(--contrast)',
      },
      secondary: {
        border: 'solid 2px',
        color: 'var(--default)',
        '--hover': 'var(--defaultHover)',
        '--onBackgroundColor': 'var(--contrast)',
      },
      tertiary: {
        color: 'var(--default)',
        '--hover': 'var(--defaultHover)',
        '--onColor': 'token(colors.$brandContrast)',
      },
    },
    size: {
      small: {
        size: '$5',
        '& > svg': {
          size: '$4',
        },
      },
      default: {
        size: '$6',
      },
      large: {
        size: '$7',
        '& > svg': {
          size: '$6',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
    size: 'default',
  },
})

const StyledToggle = styled(Root, toggle)

type ToggleVariants = RecipeVariantProps<typeof toggle>
type ToggleProps = ComponentProps<typeof Root> & ToggleVariants

/**
 * Toggle Component
 *
 * Toggles are designed to wrap custom `Svg` icons much like an IconButton, while also having a controllable 'Pressed' state.
 *
 * Based on [Radix Toggle](https://www.radix-ui.com/docs/primitives/components/toggle).
 */
export const Toggle = forwardRef<ElementRef<typeof StyledToggle>, ToggleProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledToggle {...props} ref={forwardedRef}>
      {children}
    </StyledToggle>
  )
)
Toggle.displayName = 'Toggle'
