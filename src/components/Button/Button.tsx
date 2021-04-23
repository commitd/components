import { styled } from 'stitches.config'

export const _Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',

  variants: {
    /* This is a test */
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
})

type StyledButtonProps = React.ComponentProps<typeof _Button>
export type ButtonProps = StyledButtonProps & {
  /**  This is a real test */
  color?: StyledButtonProps['color']
}

/**
 * Button component test
 */
export const Button: React.FC<ButtonProps> = _Button
