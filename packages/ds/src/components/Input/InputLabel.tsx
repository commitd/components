'use client'
import React from 'react'
import { Label, LabelOptional } from '../Label'

export type InputLabelProps = {
  id: string
  label?: string
  required?: boolean
  children?: React.ReactNode
}

export const InputLabel = ({
  id,
  label,
  required,
  children,
}: InputLabelProps) => (
  // htmlFor required here for auto linking as not a radix primitive
  <Label id={`label-${id}`} variant="wrapping" htmlFor={id}>
    <span>
      {label}
      {required === false && <LabelOptional />}
    </span>
    {children}
  </Label>
)
InputLabel.displayName = 'InputLabel'
