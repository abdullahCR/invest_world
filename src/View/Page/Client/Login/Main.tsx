import React, { FormEvent } from 'react'

import { Helmet } from 'react-helmet'
import { DeepMap, FieldError, FieldValues, RegisterOptions, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import ButtonMain from '../../../../Components/Button/Main'
import FormMainGroup from '../../../../Components/Form/Form'
import LinkMain from '../../../../Components/Link/Main'
import uris from '../../../../Config/Router/URI'
import HeroMain from '../../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../../Layout/Main/Index'
import EmpireState from '../../Home/Assets/new-york-empire-state.mp4'
import investIcon from '../Assets/invest-icon.png'
import './Main.scss'

interface LoginMainTypes {
  inputEvent: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: SubmitHandler<{ username: string }>
  loading: boolean
  success: boolean
  errorMessage: string
  errors: DeepMap<FieldValues, FieldError>
  register: (
    x: RegisterOptions,
  ) => (ref: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null) => void
  handleSubmit: (
    x: SubmitHandler<{ username: string }>,
  ) => (event: FormEvent<HTMLFormElement>) => void
}

const LoginMain: React.FC<LoginMainTypes> = ({
  inputEvent,
  onSubmit,
  loading,
  success,
  errorMessage,
  errors,
  register,
  handleSubmit,
}) => {
  const { t } = useTranslation()
  return (
    <LayoutMainIndex theme="dark">
      <Helmet>
        <title>{t('login.pageTitle')}</title>
      </Helmet>
      <section className="login-page">
        <HeroMain customLayer={() => <div className="custom-form-layer" />} video={EmpireState}>
          <section className="login-main">
            {success ? (
              <p>You are successfully login</p>
            ) : (
              <div className="login-content">
                <div className="login-body">
                  <section className="login-text">
                    <h1>
                      <span className="underlined-text">
                        {t('login.title.title1').toLocaleUpperCase()}
                      </span>{' '}
                      {t('login.title.title2').toLocaleUpperCase()}
                    </h1>
                  </section>
                  {errorMessage ? (
                    <h6 className="alert alert-danger text-center">{errorMessage}</h6>
                  ) : null}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <FormMainGroup htmlFor="username" error={errors?.username?.message}>
                        {t('login.form.userName.label')}
                        <input
                          className={errors.username ? 'alert-border form-control' : 'form-control'}
                          ref={register({ required: 'Username is required' })}
                          type="text"
                          name="username"
                          minLength={4}
                          autoComplete="username"
                          id="username"
                          placeholder={t('login.form.userName.placeholder')}
                          onChange={inputEvent}
                        />
                      </FormMainGroup>
                    </div>
                    <ButtonMain className="login-button" type="submit">
                      {loading ? 'LOGGING IN...' : `${t('login.form.button')}`}
                    </ButtonMain>
                    <LinkMain external href={uris.external.tradeapi.forgotPassword}>
                      {t('login.form.link')}?
                    </LinkMain>
                  </form>
                </div>
                <div className="login-logo">
                  <img src={investIcon} alt="INVEST WORLD Icon" />
                </div>
              </div>
            )}
          </section>
        </HeroMain>
      </section>
    </LayoutMainIndex>
  )
}

export default LoginMain
