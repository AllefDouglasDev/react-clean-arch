import { HttpStatusCode } from '@/application/protocols/http/HttpClient'
import { RtkQueryHttpAdapter } from './RtkQueryHttpAdapter'

class RtkErrorStub extends Error {
  data: { error: string }
  status: number

  constructor() {
    super('rtk-error')
    this.data = { error: 'rtk-error' }
    this.name = "RtkErrorStub"
    this.status = HttpStatusCode.SERVER_ERROR
  }
}

describe('RtkQueryHttpAdapter', () => {
  it('should call mutation with correct values', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    let params: any
    const mutationSpy = (args: any) => {
      params = args
      return {
        unwrap: async () => ({
          anyData: 'any-data'
        })
      }
    }
    const sut = new RtkQueryHttpAdapter({
      mutation: mutationSpy as any 
    })
    
    await sut.post(request)

    expect(params).toEqual(request.body)
  })

  it('should return the correct status code and body', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    const mutationSpy = () => {
      return {
        unwrap: async () => ({
          anyData: 'any-data'
        })
      }
    }
    const sut = new RtkQueryHttpAdapter({
      mutation: mutationSpy as any 
    })
    
    const response = await sut.post(request)

    expect(response).toEqual({
      statusCode: 200,
      body: request.body
    })
  })

  it('should return the error status code and error message into the body', async () => {
    const request = {
      url: 'any-url',
      body: { anyData: 'any-data' }
    }
    const error = new RtkErrorStub()
    const mutationSpy = () => {
      return {
        unwrap: async () => Promise.reject(error)
      }
    }
    const sut = new RtkQueryHttpAdapter({
      mutation: mutationSpy as any 
    })
    
    const response = await sut.post(request)

    expect(response).toEqual({
      statusCode: error.status,
      body: error.data.error
    })
  })
})
