import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Resolver, useForm } from 'react-hook-form'
import { Button } from '@/presentation/components/Form/Button'
import { Input } from '@/presentation/components/Form/Input'
import { Authentication } from '@/domain/usecases/Authentication'
import { routes } from '@/presentation/router/routes'

import * as S from './styles'

type LoginPageProps = {
  authentication: Authentication
  validation: Resolver<Authentication.Input>
}

export default function LoginPage({ authentication, validation }: LoginPageProps) {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: validation })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: Authentication.Input) => {
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
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          label="Password"
          placeholder="password" 
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit">login</Button>
        {isLoading && <S.Loading>loading...</S.Loading>}
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Form>

    </S.Wrapper>
  )
}
