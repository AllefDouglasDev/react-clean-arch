import { useState } from 'react'
import { Button } from '@/presentation/components/Form/Button'
import { Input } from '@/presentation/components/Form/Input'
import { Authentication } from '@/domain/usecases/Authentication'

import * as S from './styles'

type LoginPageProps = {
  authentication: Authentication
}

export default function LoginPage({ authentication }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    setErrorMessage('')
    try {
      await authentication.login({ email, password })
    } catch (error: any) {
      setIsLoading(false)
      setErrorMessage(error.message)
    }
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Login</S.Title>
        <Input
          name="email" 
          type="email"
          label="E-mail"
          placeholder="email"  
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          id="password" 
          name="password" 
          type="password"
          label="Password"
          placeholder="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">login</Button>
        {isLoading && <S.Loading>Loading...</S.Loading>}
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Form>

    </S.Wrapper>
  )
}
