import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Authentication } from "@/domain/usecases/Authentication"
import { routes } from "@/presentation/router/routes"
import { useAuthentication } from "./usecases/useAuthentication"

export const useAuthenticationSubmit = () => {
  const navigate = useNavigate()
  const authentication = useAuthentication()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = useCallback(async (data: Authentication.Input) => {
    if (isLoading) return
    setIsLoading(true)
    setErrorMessage('')
    try {
      await authentication.login(data)
      navigate({ pathname: routes.home })
    } catch (error: any) {
      setIsLoading(false)
      setErrorMessage(error.message)
    }
  }, [isLoading])

  return { isLoading, errorMessage, onSubmit }
}
