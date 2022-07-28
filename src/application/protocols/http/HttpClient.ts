export enum HttpStatusCode {
  OK = 200,
  UNAUTHORIZED = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

export type HttpPostClientParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post: (params: HttpPostClientParams) => Promise<HttpResponse>
}

