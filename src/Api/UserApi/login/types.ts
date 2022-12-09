export type ResponseError = {
  success: boolean
  message: string
  data: Array<unknown>
}

export interface LogoutResponseTypes {
  message: string
  success: boolean
}

export default interface LogoutStateTypes {
  message?: string
  loading: boolean
  response?: LogoutResponseTypes
  error?: ResponseError
  success: boolean
}
