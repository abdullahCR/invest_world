import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

import LinkMain from '../../../Components/Link/Main'
import uris from '../../../Config/Router/URI'
import HeroMain from '../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../Layout/Main/Index'
import BannerMain from '../../Widget/Banner/Main'
import About from './Assets/about.png'
import EmpireState from './Assets/new-york-empire-state.mp4'
import TradingPlatform from './Assets/trading-platform.svg'
import WealthManagement from './Assets/wealth-management.png'

import './Main.scss'

const HomeMain: React.FC = () => {
  const history = useHistory()
  const { t, i18n } = useTranslation()
  return (
    <>
      <LayoutMainIndex theme="dark">
        <Helmet>
          <title>{t('homepage.pageTitle')}</title>
        </Helmet>
        <HeroMain video={EmpireState}>
          <section className="homepage-section">
            <BannerMain>
              <div className="content">
                <h1>{t('homepage.hero.title').toLocaleUpperCase()}</h1>
                <h3>{t('homepage.hero.subTitle').toLocaleUpperCase()}</h3>
                <p className="text-capitalize">{t('homepage.hero.desc')}</p>
                <LinkMain className="link-button" to={uris.tradingFund}>
                  {t('homepage.button.title')}
                </LinkMain>
              </div>
            </BannerMain>
          </section>
        </HeroMain>
        <main className="homepage-content">
          <section className="our-products">
            <BannerMain>
              <h2>
                {t('homepage.products.title1').toLocaleUpperCase()}
                <span> {t('homepage.products.title2').toLocaleUpperCase()}</span>
              </h2>
              <div className="content">
                <div className="d-flex wealth-management justify-content-between">
                  <div className="wealth-management-image">
                    <img
                      src={WealthManagement}
                      alt={i18n.language === 'en-US' ? 'Wealth Management' : '資本管理'}
                    />
                  </div>
                  <div className="wealth-management-content">
                    <h3>{t('homepage.products.wealth.title')}</h3>
                    <p>{t('homepage.products.wealth.desc')}</p>
                    <LinkMain className="link-button" to={uris.capitalManagement}>
                      {t('homepage.button.title')}
                    </LinkMain>
                  </div>
                  <div className="responsive-content">
                    <img
                      src={WealthManagement}
                      alt={i18n.language === 'en-US' ? 'Wealth Management' : '交易平臺'}
                    />
                  </div>
                </div>
                <div className="d-flex trading-platform justify-content-between">
                  <div className="trading-platform-content">
                    <h3>{t('homepage.products.tradingPlatform.title')}</h3>
                    <p>{t('homepage.products.tradingPlatform.desc')}</p>
                    <LinkMain className="link-button" to={uris.tradingPlatform}>
                      {t('homepage.button.title')}
                    </LinkMain>
                  </div>
                  <div className="trading-platform-image">
                    <img
                      src={TradingPlatform}
                      alt={i18n.language === 'en-US' ? 'Trading Platform' : '交易平臺'}
                    />
                  </div>
                </div>
              </div>
            </BannerMain>
          </section>
          <section className="about-invest">
            <BannerMain>
              <h2>
                {t('homepage.about.title1').toLocaleUpperCase()}
                <span> {t('homepage.about.title2').toLocaleUpperCase()}</span>
              </h2>
              <div className="content">
                <div className="img-box">
                  {i18n.language === 'en-US' ? (
                    <img src={About} alt="About INVEST WORLD" />
                  ) : (
                    <img src={About} alt="INVEST WORLD" />
                  )}
                  <p>
                    {t('homepage.about.endText.title1')}{' '}
                    <span
                      aria-hidden="true"
                      onClick={() => {
                        history.push('/contact')
                      }}
                    >
                      {t('homepage.about.endText.title2')}
                    </span>
                  </p>
                </div>
                <div className="history">
                  <div className="beginnings">
                    <h2>{t('homepage.about.section1.title')}</h2>
                    <h6>{t('homepage.about.section1.subTitle')}</h6>
                    <p>{t('homepage.about.section1.desc')}</p>
                  </div>
                  <div className="firm-born">
                    <h2>{t('homepage.about.section2.title')}</h2>
                    <h6>{t('homepage.about.section2.subTitle')}</h6>
                    <p>{t('homepage.about.section2.desc')}</p>
                  </div>
                  <div className="transition">
                    <h2>{t('homepage.about.section3.title')}</h2>
                    <h6>{t('homepage.about.section3.subTitle')}</h6>
                    <p>{t('homepage.about.section3.desc')}</p>
                  </div>
                  <div className="expansion">
                    <h2>{t('homepage.about.section4.title')}</h2>
                    <h6>{t('homepage.about.section4.subTitle')}</h6>
                    <p>{t('homepage.about.section4.desc')}</p>
                  </div>
                </div>
              </div>
            </BannerMain>
          </section>
        </main>
      </LayoutMainIndex>
    </>
  )
}

export default HomeMain
