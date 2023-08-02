import { css } from '@committed/ss/css'
import React, { PropsWithChildren } from 'react'

export const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      className={css({
        bg: '$primary',
      })}
    >
      {children}
    </button>
  )
}
