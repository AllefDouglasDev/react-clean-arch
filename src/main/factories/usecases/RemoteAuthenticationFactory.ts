import { RemoteAuthentication } from "@/application/usecases/authentication/RemoteAuthentication"
import { useLoginMutation } from "@/infra/http/rtk-query-http-adapter/auth"
import { RtkQueryHttpAdapter } from "@/infra/http/rtk-query-http-adapter/RtkQueryHttpAdapter"

export function makeRemoteAuthentication() {
  const [loginMutation] = useLoginMutation()
  const httpAdapter = new RtkQueryHttpAdapter({ mutation: loginMutation })
  return new RemoteAuthentication('', httpAdapter)
}
