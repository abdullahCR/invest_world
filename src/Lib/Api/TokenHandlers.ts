import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import Cookies from 'js-cookie'

export const accessTokenHandler = (request: AxiosRequestConfig): void => {
  const accessToken = Cookies.get('accessToken') as string
  ;(request.headers as AxiosRequestHeaders).Authorization = accessToken
    ? `Bearer ${accessToken}`
    : ''
}

export const clientTokenHandler = (request: AxiosRequestConfig): void => {
  const clientToken = Cookies.get('clientToken')
  if (request.method !== 'get') request.data = { ...request.data, clientToken }
}
