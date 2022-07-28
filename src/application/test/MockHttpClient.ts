import { HttpPostClient } from "../protocols/http/HttpClient"

export class HttpClientSpy implements HttpPostClient {
  url?: string

  async post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  } 
}
