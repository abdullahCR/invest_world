import React, { ChangeEvent, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import ButtonMain from '../../../Components/Button/Main'
import FormMainGroup from '../../../Components/Form/Form'
import HeroMain from '../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../Layout/Main/Index'
import investIcon from '../Client/Assets/invest-icon.png'
import EmpireState from '../Home/Assets/new-york-empire-state.mp4'

import './Main.scss'

const ContactMain: React.FC = () => {
  const { t } = useTranslation()

  const FormContainer: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
    const [topic, setTopic] = useState(t('contact.form.topic.options.trading'))
    const { register, handleSubmit, errors, clearErrors } = useForm()

    const onSubmit = (data: Record<string, unknown>) => {
      const bodyText = `Name:%20${data.fullName}%0AEmail:%20${data.email}%0APhone%20Number:%20${data.phoneNumber}%0AMessage:%20${data.message}%0A`
      window.location.href = `mailto:avvdullah@gmail.com?subject=${topic}&body=${bodyText}`
    }

    const inputEvent = (
      e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    ): void => {
      if (errors[e.target.name]) {
        clearErrors(e.target.name)
      }
      if (errors.global) {
        clearErrors('global')
      }
    }

    return (
      <div className={`form-container ${mobile ? 'mobile' : ''}`}>
        <Helmet>
          <title>{t('contact.pageTitle')}</title>
        </Helmet>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4> {t('contact.form.title')}</h4>
          <div className="form-group">
            <FormMainGroup htmlFor="fullName" error={errors?.fullName?.message}>
              {t('contact.form.name.label')}
              <input
                className={errors.fullName ? 'alert-border form-control' : 'form-control'}
                ref={register({ required: 'Full Name is required' })}
                type="text"
                name="fullName"
                minLength={4}
                autoComplete="fullName"
                id="fullName"
                placeholder={t('contact.form.name.placeholder')}
                onChange={inputEvent}
              />
            </FormMainGroup>
          </div>
          <div className="form-group">
            <FormMainGroup htmlFor="email" error={errors?.email?.message}>
              {t('contact.form.email.label')}
              <input
                className={errors.email ? 'alert-border form-control' : 'form-control'}
                ref={register({ required: 'Email is required' })}
                type="email"
                name="email"
                autoComplete="email"
                id="email"
                placeholder={t('contact.form.email.placeholder')}
                onChange={inputEvent}
              />
            </FormMainGroup>
          </div>
          <div className="form-group">
            <FormMainGroup htmlFor="phoneNumber" error={errors?.phoneNumber?.message}>
              {t('contact.form.number.label')}
              <input
                className={errors.phoneNumber ? 'alert-border form-control' : 'form-control'}
                ref={register({ required: 'Phone Number is required' })}
                type="tel"
                name="phoneNumber"
                minLength={4}
                autoComplete="phoneNumber"
                id="phoneNumber"
                placeholder={t('contact.form.number.placeholder')}
                onChange={inputEvent}
              />
            </FormMainGroup>
          </div>
          <div className="form-group">
            <FormMainGroup htmlFor="topic" error={errors?.topic?.message}>
              {t('contact.form.topic.label')}
              <div className="select-dropdown">
                <Dropdown>
                  <Dropdown.Toggle>{topic}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setTopic(t('contact.form.topic.options.trading'))}
                    >
                      {t('contact.form.topic.options.trading')}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setTopic(t('contact.form.topic.options.mining'))}>
                      {t('contact.form.topic.options.mining')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setTopic(t('contact.form.topic.options.management'))}
                    >
                      {t('contact.form.topic.options.management')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setTopic(t('contact.form.topic.options.platform'))}
                    >
                      {t('contact.form.topic.options.platform')}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setTopic(t('contact.form.topic.options.other'))}>
                      {t('contact.form.topic.options.other')}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </FormMainGroup>
          </div>
          <div className="form-group">
            <FormMainGroup htmlFor="message" error={errors?.message?.message}>
              {t('contact.form.message.label')}
              <textarea
                className={errors.message ? 'alert-border form-control' : 'form-control'}
                ref={register({ required: 'Message is required' })}
                name="message"
                minLength={10}
                autoComplete="message"
                id="message"
                placeholder={t('contact.form.message.placeholder')}
                onChange={inputEvent}
              />
            </FormMainGroup>
          </div>
          <ButtonMain className="send-message-button" type="submit">
            {t('contact.form.button')}
          </ButtonMain>
        </form>
      </div>
    )
  }

  return (
    <LayoutMainIndex theme="light">
      <section className="contact-page">
        <HeroMain
          customLayer={() => <div className="custom-form-layer custom-layer" />}
          video={EmpireState}
        >
          <section className="contact-body">
            <div className="contact-content">
              <div className="hero-text-section">
                <h1>
                  <span className="underlined-text">
                    {t('contact.title.title1').toLocaleUpperCase()}
                  </span>{' '}
                  {t('contact.title.title2').toLocaleUpperCase()}
                </h1>
                <p>{t('contact.contactDetail')}</p>
                <div className="contact-address-section">
                  <p className="contact-address-title">{t('contact.address.title')}:</p>
                  <p className="contact-address1">{t('contact.address.address1')}</p>
                  <p>{t('contact.address.address2')}</p>
                  <p>{t('contact.address.address4')}</p>
                </div>
                <div className="social-icons">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                  <FontAwesomeIcon icon={['fab', 'telegram']} />
                </div>
              </div>
              <div className="contact-logo">
                <img src={investIcon} alt="investIcon Logo" />
              </div>
            </div>
          </section>
        </HeroMain>
        <FormContainer />
        <FormContainer mobile />
      </section>
    </LayoutMainIndex>
  )
}

export default ContactMain
