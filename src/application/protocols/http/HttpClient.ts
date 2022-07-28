export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export type HttpPostClientParams<T = any> = {
  url: string
  body?: T
}

export interface HttpPostClient<T = any, R = any> {
  post: (params: HttpPostClientParams<T>) => Promise<HttpResponse<R>>
}

