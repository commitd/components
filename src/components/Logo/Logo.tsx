import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { styled } from '../../stitches.config'
import { Svg } from '../Svg'

const StyledSvg = styled(Svg, {
  color: '$brandYellow',
  size: '$12',
})

/**
 * Committed Logo, SVG component defaults to the Committed yellow.
 *
 * Use only with brand colours or grey scale for spinners.
 */
export const Logo = forwardRef<
  ElementRef<typeof Svg>,
  ComponentProps<typeof Svg>
>((props, forwardedRef) => (
  <StyledSvg
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    ref={forwardedRef}
    {...props}
  >
    <path
      className="commit_logo"
      d="M215.24 77.76c-.868 3.559-7.539 2.572-10.803 4.426-57.9 16.732-105.793 64.482-122.607 122.209-17.516 57.076-4.33 122.373 34.549 168.197 25.341 30.436 60.348 52.047 98.861 60.888v76.73h81.52v-76.728c61.23-13.633 113.393-61.476 132.248-121.443 18.804-57.048 6.763-122.973-31.692-169.713-25.29-31.406-61.287-54.014-100.595-62.998V2.211h-81.48V77.76zm36.694 78.515c39.604-1.953 78.901 21.962 95.022 58.244 17.615 36.825 9.21 83.858-19.937 112.407-27.57 28.496-72.69 37.623-109.183 22.09-37.152-14.827-62.907-53.607-61.966-93.626-.136-40.346 26.841-78.952 64.788-92.681 9.991-3.841 20.604-5.837 31.276-6.434z"
      strokeWidth={4}
    />
  </StyledSvg>
))
Logo.toString = () => `.${StyledSvg.className}`
