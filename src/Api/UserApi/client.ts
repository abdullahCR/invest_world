import axios, { AxiosError, AxiosResponse } from 'axios'

import errorResponseHandler, { successResponseHandler } from '../../Lib/Api/ResponseHandler'
import { accessTokenHandler, clientTokenHandler } from '../../Lib/Api/TokenHandlers'

const UserApiHost = process.env.REACT_APP_API_USER

const UserApiClient = axios.create({
  baseURL: `https://${UserApiHost}`,
})

UserApiClient.interceptors.request.use((request) => {
  clientTokenHandler(request)
  accessTokenHandler(request)
  return request
})

UserApiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    successResponseHandler(response)
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    errorResponseHandler(error)
    return Promise.reject(error)
  },
)

export default UserApiClient
