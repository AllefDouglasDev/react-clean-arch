import api from '@/infra/http/rtk-query-http-adapter'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { rootReducer } from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export default store

