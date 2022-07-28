export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
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

