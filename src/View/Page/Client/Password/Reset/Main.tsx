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

interface PasswordResetMainTypes {
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

const PasswordResetMain: React.FC<PasswordResetMainTypes> = ({
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
        <title>{t('reset.pageTitle')}</title>
      </Helmet>
      <section className="reset-page">
        <HeroMain customLayer={() => <div className="custom-form-layer" />} video={EmpireState}>
          <section className="reset-main">
            <div className="reset-content">
              <div className="reset-body">
                <section className="reset-text">
                  <h1>
                    <span className="underlined-text">
                      {t('reset.title.title1').toLocaleUpperCase()}
                    </span>{' '}
                    {t('reset.title.title2').toLocaleUpperCase()}
                  </h1>
                </section>
                {errorMessage ? (
                  <h6 className="alert alert-danger text-center">{errorMessage}</h6>
                ) : null}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <FormMainGroup htmlFor="password" error={errors?.password?.message}>
                      {t('reset.form.newPassword.label')}
                      <input
                        className={errors.password ? 'alert-border form-control' : 'form-control'}
                        ref={register({ required: 'Password is required' })}
                        type="password"
                        name="password"
                        autoComplete="password"
                        id="password"
                        placeholder="**********"
                        onChange={inputEvent}
                      />
                    </FormMainGroup>
                  </div>
                  <div className="form-group">
                    <FormMainGroup htmlFor="newPassword" error={errors?.newPassword?.message}>
                      {t('reset.form.repeatPassword.label')}
                      <input
                        className={
                          errors.newPassword ? 'alert-border form-control' : 'form-control'
                        }
                        ref={register({ required: 'Re-Enter Password is required' })}
                        type="newPassword"
                        name="newPassword"
                        autoComplete="password"
                        id="newPassword"
                        placeholder="**********"
                        onChange={inputEvent}
                      />
                    </FormMainGroup>
                  </div>
                  <ButtonMain className="reset-button" type="submit">
                    {loading ? 'SUBMITTING...' : `${t('reset.form.button')}`}
                  </ButtonMain>
                </form>
              </div>
              <div className="reset-logo">
                <img src={investIcon} alt="INVEST WORLD Icon" />
              </div>
            </div>
          </section>
        </HeroMain>
      </section>
    </LayoutMainIndex>
  )
}

export default PasswordResetMain
