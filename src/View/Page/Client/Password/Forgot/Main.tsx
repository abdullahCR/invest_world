import React, { FormEvent } from 'react'

import { Helmet } from 'react-helmet'
import { DeepMap, FieldError, FieldValues, RegisterOptions, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import ButtonMain from '../../../../../Components/Button/Main'
import FormMainGroup from '../../../../../Components/Form/Form'
import HeroMain from '../../../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../../../Layout/Main/Index'
import EmpireState from '../../../Home/Assets/new-york-empire-state.mp4'
import investIcon from '../../Assets/invest-icon.png'
import './Main.scss'

interface PasswordForgotMainTypes {
  inputEvent: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
  loading: boolean
  errorMessage: string
  errors: DeepMap<FieldValues, FieldError>
  register: (
    x: RegisterOptions,
  ) => (ref: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null) => void
  handleSubmit: (x: SubmitHandler<() => void>) => (event: FormEvent<HTMLFormElement>) => void
}

const PasswordForgotMain: React.FC<PasswordForgotMainTypes> = ({
  inputEvent,
  onSubmit,
  loading,
  errorMessage,
  errors,
  register,
  handleSubmit,
}) => {
  const { t } = useTranslation()
  return (
    <LayoutMainIndex theme="light">
      <Helmet>
        <title>{t('forgot.pageTitle')}</title>
      </Helmet>
      <section className="forgot-page">
        <HeroMain customLayer={() => <div className="custom-form-layer" />} video={EmpireState}>
          <section className="forgot-main">
            <div className="forgot-content">
              <div className="forgot-body">
                <section className="forgot-text">
                  <h1>
                    <span className="underlined-text">
                      {t('forgot.title.title1').toLocaleUpperCase()}
                    </span>{' '}
                    {t('forgot.title.title2').toLocaleUpperCase()}
                  </h1>
                </section>
                {errorMessage ? (
                  <h6 className="alert alert-danger text-center">{errorMessage}</h6>
                ) : null}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <FormMainGroup htmlFor="username" error={errors?.username?.message}>
                      {t('forgot.form.userName.label')}
                      <input
                        className={errors.username ? 'alert-border form-control' : 'form-control'}
                        ref={register({ required: 'Username is required' })}
                        type="text"
                        name="username"
                        minLength={4}
                        autoComplete="username"
                        id="username"
                        placeholder={t('forgot.form.userName.placeholder')}
                        onChange={inputEvent}
                      />
                    </FormMainGroup>
                  </div>
                  <ButtonMain className="forgot-button" type="submit">
                    {loading ? 'SUBMITTING...' : `${t('forgot.form.button')}`}
                  </ButtonMain>
                </form>
              </div>
              <div className="forgot-logo">
                <img src={investIcon} alt="investIcon Icon" />
              </div>
            </div>
          </section>
        </HeroMain>
      </section>
    </LayoutMainIndex>
  )
}

export default PasswordForgotMain
