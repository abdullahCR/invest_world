import React from 'react'

import './Main.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import HeroMain from '../../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../../Layout/Main/Index'
import CryptoIcon from '../Assets/crypto-trading-icon.svg'
import FundReqIcon from '../Assets/fund-req-icon.svg'
import IndexFutureIcon from '../Assets/index-future-icon.svg'
import PortfolioIcon from '../Assets/portfolio-dashboard-icon.svg'
import RiskManageIcon from '../Assets/risk-management-icon.svg'
import TradeAutoIcon from '../Assets/trade-auto-icon.svg'
import TradingFundHero from '../Assets/trading-fund-hero-video.mp4'

const TradingFundMain: React.FC = () => {
  const { t } = useTranslation()
  return (
    <LayoutMainIndex theme="dark">
      <Helmet>
        <title>{t('tradingFund.pageTitle')}</title>
      </Helmet>
      <main className="trading-fund-page">
        <HeroMain
          customLayer={() => <div className="custom-layer-trading" />}
          video={TradingFundHero}
        >
          <div className="hero-text-section">
            <h1>
              <span className="underlined-text">
                {t('tradingFund.hero.title1').toLocaleUpperCase()}
              </span>{' '}
              {t('tradingFund.hero.title2').toLocaleUpperCase()}
            </h1>
            <p>{t('tradingFund.hero.desc')}</p>
          </div>
        </HeroMain>
        <section className="trading-fund-body">
          <section className="fund-section">
            <div className="image-section">
              <img src={TradeAutoIcon} alt="Fully Trading Automation" />
            </div>
            <div className="text-section">
              <h4>{t('tradingFund.features.tradingAutomation.title')}</h4>
              <p>{t('tradingFund.features.tradingAutomation.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={RiskManageIcon} alt="Risk Management" />
            </div>
            <div className="text-section">
              <h4>{t('tradingFund.features.riskManagement.title')}</h4>
              <p>{t('tradingFund.features.riskManagement.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={PortfolioIcon} alt="Portfolio Dashboard" />
            </div>
            <div className="text-section">
              <h4>{t('tradingFund.features.portfolio.title')}</h4>
              <p>{t('tradingFund.features.portfolio.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={IndexFutureIcon} alt="Index Future Trading" />
            </div>
            <div className="text-section">
              <h4>{t('tradingFund.features.indexFuture.title')}</h4>
              <p>{t('tradingFund.features.indexFuture.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={CryptoIcon} alt="Cryptocurrency Trading" />
            </div>
            <div className="text-section">
              <h4>{t('tradingFund.features.cryptoTrading.title')}</h4>
              <p>{t('tradingFund.features.cryptoTrading.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={FundReqIcon} alt="Fund Requirements" />
            </div>
            <div className="text-section">
              <h4>{t('tradingFund.features.fundReq.title')}</h4>
              <p>{t('tradingFund.features.fundReq.desc')}</p>
            </div>
          </section>
        </section>
      </main>
    </LayoutMainIndex>
  )
}

export default TradingFundMain
