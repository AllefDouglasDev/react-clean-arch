import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError'
import { AuthenticationSpy } from '@/presentation/test/MockAuthentication'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import LoginPage from './index'

const makeSut = () => {
  const authenticationSpy = new AuthenticationSpy()
  const sut = render(
    <MemoryRouter initialEntries={['/sign-in']}>
      <LoginPage authentication={authenticationSpy} />
    </MemoryRouter>
  )
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

  it("should call Authentication only once", async () => {
    const { authenticationSpy } = makeSut()
    await fillValidForm()
    const submitBtn = screen.getByRole('button', { name: 'login' })

    await userEvent.click(submitBtn) 
    await userEvent.click(submitBtn) 

    expect(authenticationSpy.callsCount).toBe(1)
  })

  it("should render loading when submitting", async () => {
    makeSut()
    await fillValidForm()
    const submitBtn = screen.getByRole('button', { name: 'login' })

    await userEvent.click(submitBtn) 

    const loadingElement = screen.getByText(/loading.../i)
    expect(loadingElement).toBeDefined()
  })

  it.skip("should render error message when authentication returns error", async () => {
    const { authenticationSpy } = makeSut()
    const error = new InvalidCredentialsError()
    jest.spyOn(authenticationSpy, 'login').mockReturnValueOnce(Promise.reject(error))
    await fillValidForm()
    const submitBtn = screen.getByRole('button', { name: 'login' })

    await userEvent.click(submitBtn) 

    const errorElement= screen.getByText(error.message)
    expect(errorElement).toBeDefined()
  })
})
