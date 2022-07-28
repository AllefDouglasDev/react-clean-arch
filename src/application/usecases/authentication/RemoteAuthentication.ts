import { HttpPostClient } from "../../protocols/http/HttpClient";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async login(): Promise<void> {
    await this.httpClient.post(this.url)
  }
}
