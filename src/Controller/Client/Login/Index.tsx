import React, { useState } from 'react'

import actionTypes from 'Api/UserApi/login/actions'
import { RootState } from 'index'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import LoginMain from '../../../View/Page/Client/Login/Main'

const LoginIndex: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const { errors, clearErrors, register, handleSubmit } = useForm()
  const { loading, success } = useSelector((state: RootState) => state.login)

  const onSubmit: SubmitHandler<{ username: string }> = (data) => {
    setErrorMessage('')
    if (data.username) {
      dispatch({ type: actionTypes.LOGIN_POST })
    }
  }

  const inputEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (errors[e.target.name]) {
      clearErrors(e.target.name)
    }
    if (errors.global) {
      clearErrors('global')
    }
  }

  return (
    <LoginMain
      inputEvent={inputEvent}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={loading}
      errorMessage={errorMessage}
      errors={errors}
      success={success}
    />
  )
}

export default LoginIndex
