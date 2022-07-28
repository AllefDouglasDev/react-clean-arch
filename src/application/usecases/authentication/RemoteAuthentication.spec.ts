import { HttpClientSpy } from '../../test/MockHttpClient'
import { RemoteAuthentication } from './RemoteAuthentication'


describe("RemoteAuthentication", () => {
  it("should call HttpClient with correct URL", async () => {
    const url = "any-url"
    const httpClientSpy = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpClientSpy)
    await sut.login()
    expect(httpClientSpy.url).toBe(url)
  })
})

