import { HttpPostClient, HttpPostClientParams } from "../protocols/http/HttpClient"

export class HttpClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post({ url, body }: HttpPostClientParams): Promise<void> {
    this.url = url
    this.body = body
    return Promise.resolve()
  } 
}
