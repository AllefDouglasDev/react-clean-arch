import { HttpStatusCode } from '@/application/protocols/http/HttpClient'
import { HttpClientSpy } from '@/application/test/MockHttpClient'
import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError'
import { RemoteAuthentication } from './RemoteAuthentication'

const makeSut = (url: string = 'any-url') => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteAuthentication(url, httpClientSpy)
  return { sut, httpClientSpy }
}

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
    httpClientSpy.response = {
      statusCode: HttpStatusCode.UNAUTHORIZED,
    }
    const accountData = { email: 'any-email', password: 'any-password' }

    const promise = sut.login(accountData)

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})

