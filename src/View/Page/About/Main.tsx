import React from 'react'

import './Main.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import HeroMain from '../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../Layout/Main/Index'
import AboutPageHero from './Assets/about-page-hero.png'

const AboutMain: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <LayoutMainIndex theme="light">
        <Helmet>
          <title>{t('about.pageTitle')}</title>
        </Helmet>
        <main className="about-page">
          <HeroMain
            image={AboutPageHero}
            customLayer={() => <div className="custom-layer-about" />}
          >
            <div className="about-hero">
              <h1
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                }}
              >
                <span>{t('about.hero.title1').toLocaleUpperCase()}</span>{' '}
                {t('about.hero.title2').toLocaleUpperCase()}
              </h1>
              <div> </div>
              <p>{t('about.hero.desc')}</p>
            </div>
          </HeroMain>
          <section className="about-content">
            <div className="content-container">
              <div>
                <h2>
                  <span>{t('about.investLLC.title1')}</span> {t('about.investLLC.title2')}
                </h2>
                <h3>{t('about.investLLC.subTitle')}</h3>
                <p>{t('about.investLLC.desc')} </p>
              </div>
              <div>
                <h2>
                  <span>{t('about.investLTD.title1')}</span> {t('about.investLTD.title2')}
                </h2>
                <h3>{t('about.investLTD.subTitle')}</h3>
                <p>{t('about.investLTD.desc')} </p>
              </div>
              <div>
                <h2>
                  <span>{t('about.aitradeINC.title1')}</span> {t('about.aitradeINC.title2')}
                </h2>
                <h3>{t('about.aitradeINC.subTitle')}</h3>
                <p>{t('about.aitradeINC.desc')} </p>
              </div>
            </div>
          </section>
        </main>
      </LayoutMainIndex>
    </>
  )
}

export default AboutMain
