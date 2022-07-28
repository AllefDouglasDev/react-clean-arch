import axios from 'axios'

export const mockAxios = () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const mockedAxiosResult = { data: 'any-body', status: 200 }
  mockedAxios.post.mockResolvedValue(mockedAxiosResult)
  return { mockedAxios, mockedAxiosResult }
}

