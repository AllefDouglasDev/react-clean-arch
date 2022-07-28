import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({ id, name, label, error, ...props }: InputProps) {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id || name}>{label}</S.Label>}
      <S.Input id={id} name={name} {...props} />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
