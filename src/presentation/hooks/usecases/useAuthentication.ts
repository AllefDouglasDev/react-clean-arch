import { createContext, useContext } from "react";
import { Authentication } from "@/domain/usecases/Authentication";

const AuthenticationContext = createContext<Authentication | undefined>(undefined)

export const AuthenticationProvider = AuthenticationContext.Provider

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext)

  if (!context) {
    throw new Error('useAuthentication must be used inside a AuthenticationContext')
  }

  return context
}
