import { mockAxios } from '../test/MockAxios'

import { AxiosHttpAdapter } from "./AxiosHttpAdapter"

jest.mock('axios')

const makeSut = () => {
  const mockedAxios = mockAxios()
  const sut = new AxiosHttpAdapter()
  return { sut, ...mockedAxios }
}

describe('AxiosHttpAdapter', () => {
  it('should call axios with correct values', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    const { sut, mockedAxios } = makeSut()

    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  it('should return the correct status code and body', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    const { sut, mockedAxiosResult } = makeSut()

    const response = await sut.post(request)

    expect(response).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
