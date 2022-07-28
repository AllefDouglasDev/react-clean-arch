import { Authentication } from '@/domain/usecases/Authentication'
import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LoginForm } from './index'

class AuthenticationSpy implements Authentication {
  input?: Authentication.Input

  async login(input: Authentication.Input): Promise<Authentication.Output> {
    this.input = input
    return Promise.resolve({ token: '' })
  }
}

const makeSut = () => {
  const authenticationSpy = new AuthenticationSpy()
  const sut = render(<LoginForm authentication={authenticationSpy} />)
  return { sut, authenticationSpy }
}

const fillValidForm = async () => {
  const email = 'email@email.com'
  const password = 'password'
  const emailElement = screen.getByPlaceholderText('email')
  const passwordElement = screen.getByPlaceholderText('password')
  await userEvent.type(emailElement, email)
  await userEvent.type(passwordElement, password)
  return { email, password }
}

describe("LoginForm", () => {
  it("should call Authentication with correct data when submit valid form", async () => {
    const { authenticationSpy } = makeSut()
    const { email, password } = await fillValidForm()
    const submitBtn = screen.getByRole('button', { name: 'login' })

    await userEvent.click(submitBtn) 

    expect(authenticationSpy.input).toEqual({ email, password })
  })
})
