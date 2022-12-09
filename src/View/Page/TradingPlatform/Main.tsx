import React from 'react'

import './Main.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import uriEncode from '../../../Helper/URI/Encode'
import HeroMain from '../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../Layout/Main/Index'
import HedgeFundIllustration from './Assets/hedge-fund-illustration.svg'
import TradingDataIllustration from './Assets/trading-data-illustration.svg'
import TradingPlatformHero from './Assets/trading-platform-hero.png'
import TradingSubscriptionIllustrationCN from './Assets/trading-subscription-illu-cn.svg'
import TradingSubscriptionIllustration from './Assets/trading-subscription-illustration.svg'

const TradingPlatformMain: React.FC = () => {
  const { t, i18n } = useTranslation()
  return (
    <LayoutMainIndex theme="dark-nav">
      <Helmet>
        <title>{t('tradingPlatform.pageTitle')}</title>
      </Helmet>
      <main className="trading-platform-page">
        <HeroMain
          image={TradingPlatformHero}
          customLayer={() => <div className="custom-layer-trading-platform" />}
        >
          <div className="hero-text-section">
            <h1>
              <span className="underlined-text">
                {t('tradingPlatform.hero.title1').toLocaleUpperCase()}
              </span>{' '}
              {t('tradingPlatform.hero.title2').toLocaleUpperCase()}
            </h1>
            <p>{t('tradingPlatform.hero.desc')}</p>
          </div>
        </HeroMain>
        <section className="trading-platform-body">
          <section className="platform-rows" id={uriEncode('single-subscription')}>
            <div className="text-section">
              <h2>{t('tradingPlatform.body.subscription.title').toLocaleUpperCase()}</h2>
              <h4>{t('tradingPlatform.body.subscription.subTitle')}</h4>
              <p>{t('tradingPlatform.body.subscription.desc')}</p>
            </div>
            <div className="image-section">
              {i18n.resolvedLanguage === 'cn' ? (
                <img src={TradingSubscriptionIllustrationCN} alt="交易訂閱說明" />
              ) : (
                <img
                  src={TradingSubscriptionIllustration}
                  alt="Trading Subscription Illustration"
                />
              )}
            </div>
          </section>
          <section className="platform-rows right" id={uriEncode('massive-data')}>
            <div className="grey-background">
              <div className="text-section">
                <h2>{t('tradingPlatform.body.tradingData.title').toLocaleUpperCase()}</h2>
                <h4>{t('tradingPlatform.body.tradingData.subTitle')}</h4>
                <p>{t('tradingPlatform.body.tradingData.desc1')}</p>
                <p>{t('tradingPlatform.body.tradingData.desc2')}</p>
              </div>
              <div className="image-section">
                <img src={TradingDataIllustration} alt="Trading Data Illustration" />
              </div>
            </div>
          </section>
          <section className="platform-rows" id={uriEncode('private-equity')}>
            <div className="text-section">
              <h2>{t('tradingPlatform.body.hedgeFund.title').toLocaleUpperCase()}</h2>
              <h4>{t('tradingPlatform.body.hedgeFund.subTitle')}</h4>
              <p>{t('tradingPlatform.body.hedgeFund.desc')}</p>
            </div>
            <div className="image-section">
              <img src={HedgeFundIllustration} alt="Hedge Fund Illustration}" />
            </div>
          </section>
        </section>
      </main>
    </LayoutMainIndex>
  )
}

export default TradingPlatformMain
