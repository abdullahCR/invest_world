import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import PasswordForgotMain from '../../../../View/Page/Client/Password/Forgot/Main'

const ForgotIndex: React.FC = () => {
  const { register, handleSubmit, errors, clearErrors } = useForm()
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    setLoading(true)
    setErrorMessage('')
    setTimeout(() => {
      setErrorMessage('User does not exist.')
      setLoading(false)
    }, 1500)
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
    <PasswordForgotMain
      inputEvent={inputEvent}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={loading}
      errorMessage={errorMessage}
      errors={errors}
    />
  )
}

export default ForgotIndex
