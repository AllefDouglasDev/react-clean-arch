import { Resolver, useForm } from 'react-hook-form'
import { Button } from '@/presentation/components/Form/Button'
import { Input } from '@/presentation/components/Form/Input'
import { Authentication } from '@/domain/usecases/Authentication'
import { useAuthenticationSubmit } from '@/presentation/hooks/useAuthentication'

import * as S from './styles'

type LoginPageProps = {
  validation: Resolver<Authentication.Input>
}

export default function LoginPage({ validation }: LoginPageProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: validation })
  const { isLoading, errorMessage, onSubmit } = useAuthenticationSubmit()

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
