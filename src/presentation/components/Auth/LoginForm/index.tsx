import { useState } from 'react'
import { Button } from '@/presentation/components/Form/Button'
import { Input } from '@/presentation/components/Form/Input'
import { Authentication } from '@/domain/usecases/Authentication'

import * as S from './styles'

type LoginFormProps = {
  authentication: Authentication
}

export function LoginForm({ authentication }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    await authentication.login({ email, password })
  }
  
  return (
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
      {isLoading && <span>Loading...</span>}
    </S.Form>
  )
}

