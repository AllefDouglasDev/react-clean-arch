import axios from 'axios'

import { HttpPostClientParams } from "@/application/protocols/http/HttpClient";

export class AxiosHttpClient {
  async post (params: HttpPostClientParams<any>): Promise<void> {
    await axios(params.url) 
  }
}
