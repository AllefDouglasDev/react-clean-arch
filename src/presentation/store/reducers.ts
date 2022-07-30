import api from '@/infra/http/rtk-query-http-adapter'
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'

/**
 * Merges the main reducer with the router state
 */
const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
})

const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  return appReducer(state, action)
}

export { rootReducer }

