import React, { ReactNode } from 'react'
import { css } from '../styled-system/css'

export interface IButtonProps {
  children: ReactNode
}

export const Panda = ({ children }: IButtonProps) => {
  return (
    <button
      className={css({
        bg: 'brandYellow',
        fontFamily: 'Inter',
        px: '4',
        py: '3',
        borderRadius: 'md',
        _hover: { bg: 'grey12' },
      })}
    >
      {children}
    </button>
  )
}
