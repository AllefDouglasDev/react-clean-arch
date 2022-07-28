import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export function Input({ id, name, label, ...props }: InputProps) {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id || name}>{label}</S.Label>}
      <S.Input id={id} name={name} {...props} />
    </S.Wrapper>
  )
}
