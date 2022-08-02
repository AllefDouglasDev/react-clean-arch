import { 
  HttpPostClient, 
  HttpPostClientParams, 
  HttpResponse, 
  HttpStatusCode 
} from '@/application/protocols/http/HttpClient'
import { MutationDefinition } from '@reduxjs/toolkit/dist/query'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'

type Error = {
  error?: string
  data?: any 
  status?: number
  originalStatus?: number 
}

type RtkQueryHttpAdapterParams = {
  mutation?: MutationTrigger<MutationDefinition<any, any, any, any>> 
}

export class RtkQueryHttpAdapter implements HttpPostClient {
  constructor(
    private readonly params?: RtkQueryHttpAdapterParams
  ) {}

  async post (params: HttpPostClientParams): Promise<HttpResponse> {
    if (!this.params?.mutation) throw new Error('Endpoint mutation is missing')
    try {
      const result = await this.params.mutation(params.body).unwrap()
      return { body: result, statusCode: HttpStatusCode.OK } 
    } catch (err) {
      const error = err as Error
      const body = error.data?.error || error.error
      const statusCode =
        error.status || error.originalStatus || HttpStatusCode.SERVER_ERROR
      return { body, statusCode }
    }
  }
}
