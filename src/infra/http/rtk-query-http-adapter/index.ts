import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { environment } from '@/infra/http/config/environment'

export const TOKEN_KEY = '@app/token'

const api = createApi({
  tagTypes: [],
  baseQuery: fetchBaseQuery({ baseUrl: environment.baseUrl }),
  endpoints: () => ({}),
})

export default api

