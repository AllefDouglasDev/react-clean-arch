import { RemoteAuthentication } from "@/application/usecases/authentication/RemoteAuthentication";
import { useLoginMutation } from "@/infra/http/rtk-query-http-adapter/auth";
import { RtkQueryHttpAdapter } from "@/infra/http/rtk-query-http-adapter/RtkQueryHttpAdapter";
import LoginPage from "@/presentation/pages/login";
import { authenticationSchema } from "@/presentation/validations/yup/AuthenticationSchema";
import { yupResolver } from '@hookform/resolvers/yup'

export function makeLoginPage() {
  const [loginMutation] = useLoginMutation()
  const httpAdapter = new RtkQueryHttpAdapter({ mutation: loginMutation })
  const authentication = new RemoteAuthentication('', httpAdapter)
  const validation = yupResolver(authenticationSchema) 
  return (
    <LoginPage 
      authentication={authentication}
      validation={validation} 
    /> 
  )
}
