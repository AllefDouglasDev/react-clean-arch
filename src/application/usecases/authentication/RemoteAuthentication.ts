import { Authentication } from "../../../domain/usecases/authentication";
import { HttpPostClient } from "../../protocols/http/HttpClient";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async login(body: Authentication.Input): Promise<void> {
    await this.httpClient.post({ url: this.url, body })
  }
}
