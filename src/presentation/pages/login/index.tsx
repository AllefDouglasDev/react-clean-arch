import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '@/presentation/components/Form/Button'
import { Input } from '@/presentation/components/Form/Input'
import { Authentication } from '@/domain/usecases/Authentication'
import { routes } from '@/presentation/router/routes'

import * as S from './styles'

type LoginPageProps = {
  authentication: Authentication
}

export default function LoginPage({ authentication }: LoginPageProps) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<{ email: string, password: string }>()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: { email: string, password: string }) => {
    if (isLoading) return
    setIsLoading(true)
    setErrorMessage('')
    try {
      await authentication.login(data)
      navigate({ pathname: routes.home })
    } catch (error: any) {
      setIsLoading(false)
      setErrorMessage(error.message)
    }
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Login</S.Title>
        <Input
          type="email"
          label="E-mail"
          placeholder="email"  
          {...register("email")}
        />
        <Input
          type="password"
          label="Password"
          placeholder="password" 
          {...register("password")}
        />
        <Button type="submit">login</Button>
        {isLoading && <S.Loading>Loading...</S.Loading>}
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Form>

    </S.Wrapper>
  )
}
