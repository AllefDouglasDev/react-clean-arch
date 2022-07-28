import { HttpPostClient, HttpStatusCode } from "@/application/protocols/http/HttpClient";
import { InvalidCredentialsError } from "@/domain/errors/InvalidCredentialsError";
import { UnexpectedError } from "@/domain/errors/UnexpectedError";
import { Authentication } from "@/domain/usecases/Authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async login(body: Authentication.Input): Promise<void> {
    const response = await this.httpClient.post({ url: this.url, body })
    switch (response.statusCode) {
      case HttpStatusCode.OK: break
      case HttpStatusCode.UNAUTHORIZED: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
