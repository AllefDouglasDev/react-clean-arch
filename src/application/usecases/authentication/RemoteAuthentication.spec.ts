import { HttpStatusCode } from '@/application/protocols/http/HttpClient'
import { HttpClientSpy } from '@/application/test/MockHttpClient'
import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError'
import { UnexpectedError } from '@/domain/errors/UnexpectedError'
import { Authentication } from '@/domain/usecases/Authentication'
import { RemoteAuthentication } from './RemoteAuthentication'

const makeSut = (url: string = 'any-url') => {
  const httpClientSpy = new HttpClientSpy<Authentication.Input, Authentication.Output>()
  const sut = new RemoteAuthentication(url, httpClientSpy)
  return { sut, httpClientSpy }
}

const unexpectedErrors = [
  HttpStatusCode.NOT_FOUND,
  HttpStatusCode.BAD_REQUEST,
  HttpStatusCode.SERVER_ERROR
]

describe("RemoteAuthentication", () => {
  it("should call HttpClient with correct URL", async () => {
    const url = "other-url"
    const { sut, httpClientSpy } = makeSut(url)

    await sut.login({ email: 'any-email', password: 'any-password' })

    expect(httpClientSpy.url).toBe(url)
  })

  it("should call HttpClient with correct body", async () => {
    const { sut, httpClientSpy } = makeSut()
    const accountData = { email: 'any-email', password: 'any-password' }

    await sut.login(accountData)

    expect(httpClientSpy.body).toEqual(accountData)
  })

  it("should throw InvalidCredentialsError when HttpClient returns 401", async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.UNAUTHORIZED }
    const accountData = { email: 'any-email', password: 'any-password' }

    const promise = sut.login(accountData)

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  it.each(unexpectedErrors)("should throw UnexpectedError when HttpClient returns unhandled status code", async (statusCode) => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = { statusCode }
    const accountData = { email: 'any-email', password: 'any-password' }

    const promise = sut.login(accountData)

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it("should return an LoginResponseDto when HttpClient return 200", async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = { token: 'any-token' }
    httpClientSpy.response = {
      statusCode: HttpStatusCode.OK,
      body: httpResult
    }
    const accountData = { email: 'any-email', password: 'any-password' }

    const loginResult = await sut.login(accountData)

    expect(loginResult).toEqual(httpResult)
  })
})

