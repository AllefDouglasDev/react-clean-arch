import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: ButtonProps) {
  return <S.Button {...props} />
}
