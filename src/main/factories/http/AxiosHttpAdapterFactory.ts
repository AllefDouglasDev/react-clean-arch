import { AxiosHttpAdapter } from "@/infra/http/axios-http-adapter/AxiosHttpAdapter";

export function makeAxiosHttpAdapter() {
  return new AxiosHttpAdapter()
}
