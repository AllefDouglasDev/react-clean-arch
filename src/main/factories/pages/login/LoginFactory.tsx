import LoginPage from "@/presentation/pages/login";
import { authenticationSchema } from "@/presentation/validations/yup/AuthenticationSchema";
import { yupResolver } from '@hookform/resolvers/yup'
import { makeRemoteAuthentication } from "@/main/factories/usecases/RemoteAuthenticationFactory";
import { AuthenticationProvider } from "@/presentation/hooks/usecases/useAuthentication";

export function makeLoginPage() {
  const authentication = makeRemoteAuthentication()
  const validation = yupResolver(authenticationSchema) 
  return (
    <AuthenticationProvider value={authentication}>
      <LoginPage validation={validation} /> 
    </AuthenticationProvider>
  )
}
