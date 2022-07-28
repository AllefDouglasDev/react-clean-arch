import { useState } from 'react'
import { Button } from '@/presentation/components/Form/Button'
import { Input } from '@/presentation/components/Form/Input'

import * as S from './styles'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }
  
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Login</S.Title>
        <Input
          name="email" 
          type="email"
          label="E-mail"
          placeholder="example@email.com"  
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
      </S.Form>
    </S.Wrapper>
  )
}
