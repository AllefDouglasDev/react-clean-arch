import { RemoteAuthentication } from "@/application/usecases/authentication/RemoteAuthentication";
import { AxiosHttpAdapter } from "@/infra/http/axios-http-adapter/AxiosHttpAdapter";
import LoginPage from "@/presentation/pages/login";

export function makeLoginPage() {
  const url = 'https://reqres.in/api/login'
  const axiosHttpAdapter = new AxiosHttpAdapter()
  const authentication = new RemoteAuthentication(url, axiosHttpAdapter)
  return <LoginPage authentication={authentication} /> 
}
