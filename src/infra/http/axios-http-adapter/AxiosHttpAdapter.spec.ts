import axios from 'axios'

import { AxiosHttpAdapter } from "./AxiosHttpAdapter"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = { data: 'any-body', status: 200 }
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = () => {
  return new AxiosHttpAdapter()
}

describe('AxiosHttpAdapter', () => {
  it('should call axios with correct values', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    const sut = makeSut()

    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  it('should return the correct status code and body', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    const sut = makeSut()

    const response = await sut.post(request)

    expect(response).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
