import { HttpPostClient, HttpPostClientParams, HttpResponse, HttpStatusCode } from "@/application/protocols/http/HttpClient"

export class HttpClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.OK
  }

  async post({ url, body }: HttpPostClientParams): Promise<HttpResponse> {
    this.url = url
    this.body = body
    return Promise.resolve(this.response)
  } 
}
