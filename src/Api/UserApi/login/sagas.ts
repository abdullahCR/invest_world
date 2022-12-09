import { AxiosError, AxiosResponse } from 'axios'
import { all, put, takeEvery } from 'redux-saga/effects'

import UserApiClient from '../client'
import actionTypes from './actions'
import { LogoutResponseTypes } from './types'

function* loginSaga() {
  try {
    const response: AxiosResponse<LogoutResponseTypes> = yield UserApiClient.post('/login')
    yield put({
      type: actionTypes.LOGIN_POST_SUCCESS,
      response: response?.data,
      message: response?.data?.message,
      success: response?.data?.success,
    })
  } catch (error) {
    const errorResponse = (error as AxiosError).response
    if (errorResponse?.data) {
      if (typeof errorResponse?.data === 'object') {
        yield put({
          type: actionTypes.LOGIN_POST_FAIL,
          error: {
            ...errorResponse?.data,
            message: '',
            objectMessage: errorResponse?.data,
          },
        })
      } else {
        yield put({ type: actionTypes.LOGIN_POST_FAIL, error: errorResponse?.data })
      }
    } else {
      const errorMessage = 'Failed to login, Please try again'
      yield put({
        type: actionTypes.LOGIN_POST_FAIL,
        error: {
          success: false,
          message: errorMessage,
          data: {},
        },
      })
    }
  }
}

export default function* watcherSaga(): Generator {
  yield all([takeEvery(actionTypes.LOGIN_POST, loginSaga)])
}
