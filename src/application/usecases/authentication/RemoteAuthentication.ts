import { HttpPostClient } from "@/application/protocols/http/HttpClient";
import { Authentication } from "@/domain/usecases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async login(body: Authentication.Input): Promise<void> {
    await this.httpClient.post({ url: this.url, body })
  }
}
