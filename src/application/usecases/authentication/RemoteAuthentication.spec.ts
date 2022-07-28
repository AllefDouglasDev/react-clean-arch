import { HttpClientSpy } from '../../test/MockHttpClient'
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
    await sut.login()
    expect(httpClientSpy.url).toBe(url)
  })
})

