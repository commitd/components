import { useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Theme } from '../theme'

/**
 * Get the current breakpoint.
 *
 * Note this breaks the hook rule https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 * as it relies on the nested hook.
 */
export function useWidth() {
  const theme = useTheme<Theme>()
  const keys = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}
