import axios from 'axios'

import { AxiosHttpClient } from "./AxiosHttpClient"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const url = 'any-url'
    const body = { anyData: 'any-data' }
    const sut = makeSut()

    await sut.post({ url, body })

    expect(mockedAxios.post).toHaveBeenCalledWith(url, body)
  })
})
