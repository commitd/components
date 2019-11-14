import React, { FC, ComponentType, AnchorHTMLAttributes } from 'react'
import { styled } from '@material-ui/styles'
import { colors } from '../../theme'
import MaterialLink, {
  LinkProps as MaterialLinkProps
} from '@material-ui/core/Link'
import { withNoOpener } from '../../internal'

export interface LinkProps extends Omit<MaterialLinkProps, 'variant'> {
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

const aColor = colors.committedYellow[300]
const bColor = colors.red[200]
const internal = `linear-gradient(${aColor}, ${aColor})`
const external = `linear-gradient(${bColor}, ${bColor})`

const isExternal = (url: string | undefined) => url && url.startsWith('http')

const StyledLink: ComponentType<MaterialLinkProps> = styled(RawLink)({
  color: 'inherit',
  textDecoration: 'none',
  transition: 'background 100ms ease-out',
  fontWeight: 'bold',
  background: ({ href }) =>
    `${
      isExternal(href) ? external : internal
    } left bottom transparent no-repeat`,
  backgroundSize: () => '100% 2px',
  ['&:hover']: {
    backgroundSize: '100% 100%'
  }
})

const ClearLink: ComponentType<MaterialLinkProps> = styled(RawLink)({
  color: 'inherit',
  textDecoration: 'none',
  ['& .gatsby-resp-image-background-image']: {
    display: 'none !important'
  },
  ['&:hover']: {
    textDecoration: 'none',
    cursor: 'pointer'
  }
})

export const Link: FC<LinkProps> = ({
  variant = 'default',
  ...others
}: LinkProps) => {
  switch (variant) {
    case 'clear':
      return <ClearLink {...others} />
    case 'styled':
      return <StyledLink {...others} />
  }
  return <RawLink {...others} />
}

// For documentation only
export type LinkDocsProps = Omit<
  LinkProps,
  keyof (Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'color' | 'href' | 'target' | 'rel'
  >)
>

export const LinkDocs: FC<LinkDocsProps> = () => null
