import './LoginForm.css'
import { useState } from "react"

type LoginRequest = {
  email: string
  password: string
}

type LoginFormProps = {
  login: (data: LoginRequest) => Promise<void>
}

export function LoginForm ({ login }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    login({ email, password })
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            id="email" 
            name="email" 
            type="email"
            placeholder="example@email.com"  
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input 
            id="password" 
            name="password" 
            type="password"
            placeholder="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
