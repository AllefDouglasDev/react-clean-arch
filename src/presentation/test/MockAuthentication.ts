import { Authentication } from "@/domain/usecases/Authentication"

export class AuthenticationSpy implements Authentication {
  input?: Authentication.Input
  output: Authentication.Output = { token: 'any-token' }
  callsCount: number = 0

  async login(input: Authentication.Input): Promise<Authentication.Output> {
    this.input = input
      this.callsCount++
    return Promise.resolve(this.output)
  }
}
