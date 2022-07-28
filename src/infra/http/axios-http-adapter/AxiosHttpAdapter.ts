import axios from 'axios'
import { HttpPostClient, HttpPostClientParams, HttpResponse } from '@/application/protocols/http/HttpClient'

export class AxiosHttpAdapter implements HttpPostClient {
  async post (params: HttpPostClientParams): Promise<HttpResponse> {
    const { data, status } = await axios.post(params.url, params.body) 
    return { body: data, statusCode: status } 
  }
}
