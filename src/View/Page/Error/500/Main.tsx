import React from 'react'

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import LinkMain from '../../../../Components/Link/Main'
import uris from '../../../../Config/Router/URI'
import HeroMain from '../../../Layout/Main/Hero/Main'
import LayoutMainIndex from '../../../Layout/Main/Index'
import BannerMain from '../../../Widget/Banner/Main'
import EmpireState from '../../Home/Assets/new-york-empire-state.mp4'
import '../Main.scss'

const Error500Main: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <LayoutMainIndex theme="dark">
        <Helmet>
          <title>{t('500.pageTitle').toLocaleUpperCase()}</title>
        </Helmet>
        <section className="error-section">
          <HeroMain customLayer={() => <div className="custom-form-layer" />} video={EmpireState}>
            <BannerMain>
              <div className="content">
                <h1>{t('500.title').toLocaleUpperCase()}</h1>
                <h3>{t('500.detail')}</h3>
                <LinkMain className="link-button" to={uris.home}>
                  {t('500.button').toLocaleUpperCase()}
                </LinkMain>
              </div>
            </BannerMain>
          </HeroMain>
        </section>
      </LayoutMainIndex>
    </>
  )
}

export default Error500Main
