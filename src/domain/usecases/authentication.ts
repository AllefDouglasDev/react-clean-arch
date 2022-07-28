import { LoginRequestDto, LoginResponseDto } from "../models/api-dto"

export interface Authentication {
  login(input: Authentication.Input): Promise<Authentication.Output>
}

export namespace Authentication {
  export type Input = LoginRequestDto
  export type Output = LoginResponseDto
}
