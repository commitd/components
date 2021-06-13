import { Content, Overlay, Root } from '@radix-ui/react-dialog'
import React, { FC } from 'react'
import { CSS, styled } from 'stitches.config'
import { overlayStyles, overlayAnimationStyles } from '../Overlay'

const StyledOverlay = styled(Overlay, {
  ...overlayStyles,
  ...overlayAnimationStyles,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
})

const StyledContent = styled(Content, {
  ...overlayAnimationStyles,
  position: 'fixed',
  isolation: 'isolate',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: 20,
  marginTop: '-5vh',

  '&:focus': {
    outline: 'none',
  },
})

type BackdropProps = React.ComponentProps<typeof Root> & {
  /** Modify the default styling of the overlay */
  overlayCss?: CSS
  /** Modify the default styling of the content wrapper */
  contentCss?: CSS
}

/**
 * The Backdrop component can be used to isolate the user from the UI while a longer running action is taking place.
 *
 * It's appearance is controlled with the `open` prop, and any content should be children.
 *
 * Base on [Radix Dialog](https://radix-ui.com/primitives/docs/components/dialog).
 */
export const Backdrop: FC<BackdropProps> = ({
  overlayCss,
  contentCss,
  children,
  ...props
}) => {
  return (
    <Root {...props}>
      <StyledOverlay css={overlayCss} />
      <StyledContent css={contentCss}>{children}</StyledContent>
    </Root>
  )
}
