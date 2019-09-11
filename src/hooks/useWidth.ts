import { useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Theme } from '../theme'

/**
 * See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export function useWidth() {
  const theme = useTheme<Theme>()
  const keys = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}
