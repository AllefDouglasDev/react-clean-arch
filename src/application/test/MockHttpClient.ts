import { HttpPostClient, HttpPostClientParams, HttpResponse, HttpStatusCode } from "@/application/protocols/http/HttpClient"

export class HttpClientSpy<T = any, R = any> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.OK
  }

  async post({ url, body }: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    this.url = url
    this.body = body
    return Promise.resolve(this.response)
  } 
}
