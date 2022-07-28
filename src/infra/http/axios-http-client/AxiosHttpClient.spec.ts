import axios from 'axios'

import { AxiosHttpClient } from "./AxiosHttpClient"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb', async () => {
    const url = 'any-url'
    const sut = makeSut()

    await sut.post({ url })

    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
