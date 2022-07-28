import axios from 'axios'

import { AxiosHttpClient } from "./AxiosHttpClient"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct url', async () => {
    const sut = makeSut()

    await sut.post({ url: 'any-url' })

    expect(mockedAxios).toHaveBeenCalledWith('any-url')
  })
})
