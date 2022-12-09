import { AxiosError, AxiosResponse } from 'axios'

const errorResponseHandler = (error: AxiosError): AxiosError => {
  return error
}

export const successResponseHandler = (response: AxiosResponse): AxiosResponse => {
  return response
}

export default errorResponseHandler
