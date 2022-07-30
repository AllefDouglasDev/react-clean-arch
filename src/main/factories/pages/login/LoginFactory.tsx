import LoginPage from "@/presentation/pages/login";
import { authenticationSchema } from "@/presentation/validations/yup/AuthenticationSchema";
import { yupResolver } from '@hookform/resolvers/yup'
import { makeRemoteAuthentication } from "@/main/factories/usecases/RemoteAuthenticationFactory";

export function makeLoginPage() {
  const authentication = makeRemoteAuthentication()
  const validation = yupResolver(authenticationSchema) 
  return (
    <LoginPage 
      authentication={authentication}
      validation={validation} 
    /> 
  )
}
