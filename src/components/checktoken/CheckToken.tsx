import UncheckedIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import ToggleButton, { ToggleButtonProps } from '@material-ui/lab/ToggleButton'
import React from 'react'
import { PositioningProps, withPositioningProps } from '../../internal/wrappers'
import { CheckMark } from '../checkbox/CheckMark'
import { Row } from '../flex/Flex'
import { makeStyles, fade } from '../../styles'

interface CheckboxProps {
  color: 'primary' | 'secondary' | 'default'
  selected?: boolean | undefined
  disabled?: boolean
}

export interface CheckTokenProps
  extends PositioningProps,
    CheckboxProps,
    Omit<ToggleButtonProps, 'color'> {
  /**
   * The children to display
   */
  children?: React.ReactNode
}

export const Checkbox: React.FC<CheckboxProps> = ({
  selected,
  ...props
}: CheckboxProps) => {
  const color = props.color === 'default' ? 'inherit' : props.color
  if (selected) {
    return <CheckMark color={color} />
  } else {
    return <UncheckedIcon {...props} color={color} />
  }
}

const useStyles = makeStyles((theme) => {
  const borderColor =
    theme.palette.type === 'light'
      ? 'rgba(0, 0, 0, 0.23)'
      : 'rgba(255, 255, 255, 0.23)'

  return {
    root: {
      textTransform: 'none',
      '&:hover': {
        borderColor: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderColor,
        },
      },
    },
    selected: {
      color: theme.palette.action.active,
      borderColor: ({ color }: CheckTokenProps) => {
        if (
          color !== 'default' &&
          ['primary', 'secondary', 'error', 'warning', 'info'].includes(color)
        ) {
          return fade(theme.palette[color].main, 0.15)
        } else {
          return fade(theme.palette.action.active, 0.12)
        }
      },
      '&:hover': {
        backgroundColor: fade(theme.palette.action.active, 0.15),
      },
    },
  }
})

export const CheckToken = withPositioningProps<CheckTokenProps>(
  (props: CheckTokenProps) => {
    const { children, onClick, ...rest } = props
    const classes = useStyles(props)
    return (
      <ToggleButton {...rest} onChange={onClick} classes={classes}>
        <Row>
          <Checkbox
            color={props.color}
            selected={props.selected}
            disabled={props.disabled}
          />
          {children}
        </Row>
      </ToggleButton>
    )
  }
)
