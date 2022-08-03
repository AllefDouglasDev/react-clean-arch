import { Authentication } from "@/domain/usecases/Authentication"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { routes } from "../router/routes"

type UseAuthenticationProps = {
  authentication: Authentication
}

export const useAuthentication = ({ authentication }: UseAuthenticationProps) => {
  const navigate = useNavigate()
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
