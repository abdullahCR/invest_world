import React from 'react'

interface FormMainGroupTypes {
  htmlFor: string
  children?: React.ReactNode
  error?: string
}

const FormMainGroup: React.FC<FormMainGroupTypes> = (props) => {
  const { htmlFor, children, error } = props
  return (
    <>
      <label htmlFor={htmlFor}>
        {children}
        {error && <p className="input-error">{error}</p>}
      </label>
    </>
  )
}

export default FormMainGroup
