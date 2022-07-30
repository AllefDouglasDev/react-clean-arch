import { LoginRequestDto, LoginResponseDto } from '@/domain/models/api-dto'

import api from '..'

const endpoints = {
  login: () => 'login',
}

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponseDto, LoginRequestDto>({
      query: body => ({
        url: endpoints.login(),
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = authApi

export default authApi

