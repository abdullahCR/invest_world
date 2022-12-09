import React from 'react'

import './Main.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import HeroMain from '../../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../../Layout/Main/Index'
import CryptoIcon from '../Assets/crypto-trading-icon.svg'
import FundReqIcon from '../Assets/fund-req-icon.svg'
import InfraIcon from '../Assets/infra-icon.svg'
import MiningFundHero from '../Assets/mining-fund-page-video.mp4'
import PortfolioIcon from '../Assets/portfolio-dashboard-icon.svg'
import ProfitReturnIcon from '../Assets/profit-return-icon.svg'
import RiskManageIcon from '../Assets/risk-management-icon.svg'

const MiningFundMain: React.FC = () => {
  const { t } = useTranslation()
  return (
    <LayoutMainIndex theme="dark">
      <Helmet>
        <title>{t('miningFund.pageTitle')}</title>
      </Helmet>
      <main className="mining-fund-page">
        <HeroMain
          customLayer={() => <div className="custom-layer-mining" />}
          video={MiningFundHero}
        >
          <div className="hero-text-section">
            <h1>
              <span className="underlined-text">
                {t('miningFund.hero.title1').toLocaleUpperCase()}
              </span>{' '}
              {t('miningFund.hero.title2').toLocaleUpperCase()}
            </h1>
            <p>{t('miningFund.hero.desc')}</p>
          </div>
        </HeroMain>
        <section className="mining-fund-body">
          <section className="fund-section">
            <div className="image-section">
              <img src={ProfitReturnIcon} alt="Probability & Return" />
            </div>
            <div className="text-section">
              <h4>{t('miningFund.features.profitReturn.title')}</h4>
              <p>{t('miningFund.features.profitReturn.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={RiskManageIcon} alt="Risk Management" />
            </div>
            <div className="text-section">
              <h4>{t('miningFund.features.riskManagement.title')}</h4>
              <p>{t('miningFund.features.riskManagement.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={PortfolioIcon} alt="Portfolio Dashboard" />
            </div>
            <div className="text-section">
              <h4>{t('miningFund.features.portfolio.title')}</h4>
              <p>{t('miningFund.features.portfolio.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={InfraIcon} alt="Infrastructure" />
            </div>
            <div className="text-section">
              <h4>{t('miningFund.features.infrastructure.title')}</h4>
              <p>{t('miningFund.features.infrastructure.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={CryptoIcon} alt="Cryptocurrency Trading" />
            </div>
            <div className="text-section">
              <h4>{t('miningFund.features.cryptoTrading.title')}</h4>
              <p>{t('miningFund.features.cryptoTrading.desc')}</p>
            </div>
          </section>
          <section className="fund-section">
            <div className="image-section">
              <img src={FundReqIcon} alt="Fund Requirements" />
            </div>
            <div className="text-section">
              <h4>{t('miningFund.features.fundReq.title')}</h4>
              <p>{t('miningFund.features.fundReq.desc')}</p>
            </div>
          </section>
        </section>
      </main>
    </LayoutMainIndex>
  )
}

export default MiningFundMain
