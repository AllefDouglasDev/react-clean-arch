import { RemoteAuthentication } from "@/application/usecases/authentication/RemoteAuthentication";
import { makeAxiosHttpAdapter } from "@/main/factories/http/AxiosHttpAdapterFactory";
import LoginPage from "@/presentation/pages/login";
import { authenticationSchema } from "@/presentation/validations/yup/AuthenticationSchema";
import { yupResolver } from '@hookform/resolvers/yup'

export function makeLoginPage() {
  const url = 'https://reqres.in/api/login'
  const axiosHttpAdapter = makeAxiosHttpAdapter()
  const authentication = new RemoteAuthentication(url, axiosHttpAdapter)
  return <LoginPage authentication={authentication} validation={yupResolver(authenticationSchema)} /> 
}
