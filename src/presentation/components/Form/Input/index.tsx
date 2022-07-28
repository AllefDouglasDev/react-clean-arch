import { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, error, ...props }, ref) => {
    return (
      <S.Wrapper>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Input ref={ref} name={name} {...props} />
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)
