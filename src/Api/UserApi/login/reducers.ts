import actionTypes from './actions'
import LogoutStateTypes from './types'

export const initialState: LogoutStateTypes = {
  loading: false,
  response: {} as LogoutStateTypes['response'],
  error: undefined,
  success: false,
  message: '',
}

function loginReducer(
  state = initialState,
  action: {
    type: string
    error: LogoutStateTypes['error']
    response: LogoutStateTypes['response']
    success: boolean
    message: string
  },
): LogoutStateTypes {
  switch (action.type) {
    case actionTypes.LOGIN_POST:
      return {
        ...initialState,
        loading: true,
      }
    case actionTypes.LOGIN_POST_SUCCESS:
      return {
        ...initialState,
        loading: false,
        response: action.response,
        success: action.success,
        message: action.message,
      }
    case actionTypes.LOGIN_POST_FAIL:
      return {
        ...initialState,
        loading: false,
        error: action.error,
        success: false,
        message: action.error?.message,
      }
    case actionTypes.LOGIN_POST_RESET:
      return initialState
    default:
      return state
  }
}

export default loginReducer
