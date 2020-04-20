import React from 'react'
import { styled } from '@material-ui/styles'
import { Theme, colors } from '../../theme'
import MaterialLink, {
  LinkProps as MaterialLinkProps,
} from '@material-ui/core/Link'
import { withNoOpener } from '../../internal'

export type LinkProps<C extends React.ElementType> = Omit<
  MaterialLinkProps<C, { component?: C }>,
  'variant'
> & {
  /**
   *
   * Styling variations on the link,
   *
   * default: standard link underlining
   * clear: remove text decoration and hover changes
   * styled: colored background, different for internal and external links
   *
   * @default default
   */
  variant?: 'default' | 'clear' | 'styled'
}

export const RawLink: React.ComponentType<MaterialLinkProps> = withNoOpener<
  MaterialLinkProps
>(MaterialLink)

const internalColor = colors.committedYellow[300]
const externalColor = colors.red[200]
const internal = `linear-gradient(${internalColor}, ${internalColor})`
const external = `linear-gradient(${externalColor}, ${externalColor})`

const isExternal = (url: string | undefined) => url && url.startsWith('http')

const StyledLink: React.ComponentType<MaterialLinkProps> = styled(RawLink)(
  ({ theme, href }: MaterialLinkProps & { theme: Theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    transition: 'background 100ms ease-out',
    fontWeight: 'bold',
    background: `${
      isExternal(href) ? external : internal
    } left bottom transparent no-repeat`,
    backgroundSize: '100% 2px',
    ['&:hover']: {
      backgroundSize: '100% 100%',
      color: theme.palette.getContrastText(
        isExternal(href) ? externalColor : internalColor
      ),
    },
  })
)

const ClearLink: React.ComponentType<MaterialLinkProps> = styled(RawLink)({
  color: 'inherit',
  textDecoration: 'none',
  ['& .gatsby-resp-image-background-image']: {
    display: 'none !important',
  },
  ['&:hover']: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
})

export const Link = <C extends React.ElementType>({
  variant = 'default',
  ...others
}: LinkProps<C>) => {
  switch (variant) {
    case 'clear':
      return <ClearLink {...others} />
    case 'styled':
      return <StyledLink {...others} />
  }
  return <RawLink {...others} />
}
