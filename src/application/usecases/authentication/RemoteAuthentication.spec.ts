import { HttpPostClient } from '../../protocols/http/HttpClient'
import { RemoteAuthentication } from './RemoteAuthentication'

class HttpClientSpy implements HttpPostClient {
  url?: string

  async post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  } 
}

describe("RemoteAuthentication", () => {
  it("should call HttpClient with correct URL", async () => {
    const url = "any-url"
    const httpClientSpy = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpClientSpy)
    await sut.login()
    expect(httpClientSpy.url).toBe(url)
  })
})

