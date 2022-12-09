import React from 'react'

import './Main.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import LinkMain from '../../../../Components/Link/Main'
import uris from '../../../../Config/Router/URI'
import HeroMain from '../../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../../Layout/Main/Index'
import MiningFundHero from '../Assets/mining-fund-page-video.mp4'

const CapitalManagementMain: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <LayoutMainIndex theme="dark">
        <Helmet>
          <title>{t('capital.pageTitle')}</title>
        </Helmet>
        <main className="capital-management-page">
          <HeroMain
            customLayer={() => <div className="custom-layer-capital-management" />}
            video={MiningFundHero}
          >
            <div className="capital-management-hero">
              <h1
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                }}
              >
                <span>{t('capital.hero.title1').toLocaleUpperCase()}</span>{' '}
                {t('capital.hero.title2').toLocaleUpperCase()}
              </h1>
              <p>{t('capital.hero.desc')}</p>
            </div>
          </HeroMain>
          <section className="capital-content">
            <div className="content-container">
              <div>
                <h2>
                  <span>{t('capital.tradingFund.title1')}</span> {t('capital.tradingFund.title2')}
                </h2>
                <p>{t('capital.tradingFund.desc')} </p>
                <LinkMain className="link-button" to={uris.tradingFund}>
                  {t('homepage.button.title')}
                </LinkMain>
              </div>
              <div>
                <h2>
                  <span>{t('capital.miningFund.title1')}</span> {t('capital.miningFund.title2')}
                </h2>
                <p>{t('capital.miningFund.desc')} </p>
                <LinkMain className="link-button" to={uris.miningFund}>
                  {t('homepage.button.title')}
                </LinkMain>
              </div>
            </div>
          </section>
        </main>
      </LayoutMainIndex>
    </>
  )
}

export default CapitalManagementMain
