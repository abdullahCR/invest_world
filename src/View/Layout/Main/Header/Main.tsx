import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RootState } from 'index'
import { Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NavLink as Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './Main.scss'
import uris from '../../../../Config/Router/URI'
import uriEncode from '../../../../Helper/URI/Encode'
import logo from '../Images/logo.png'

const languages: Record<string, { nativeName: string }> = {
  'en-US': { nativeName: 'ENG' },
}

const NavLinks: React.FC<{
  mobile?: boolean
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ mobile, setOpenMenu }) => {
  const { t } = useTranslation()
  const { success } = useSelector((state: RootState) => state.login)

  return (
    <nav className="nav-links">
      <ul className={`link-list ${mobile && 'mobile'}`}>
        <li>
          <Link
            onClick={() => setOpenMenu && setOpenMenu(false)}
            exact
            activeClassName="current-nav"
            to={uris.home}
          >
            {t('header.home')}
          </Link>
        </li>
        <li className="wealth-dropdown">
          <Link
            onClick={() => setOpenMenu && setOpenMenu(false)}
            exact
            activeClassName="current-nav"
            to={uris.capitalManagement}
          >
            {t('header.wealthManagement')}
            <FontAwesomeIcon style={{ marginLeft: '4px' }} icon={['fas', 'caret-down']} />
          </Link>
          <div className="sub-menu">
            <Link onClick={() => setOpenMenu && setOpenMenu(false)} exact to={uris.tradingFund}>
              {t('header.tradingFund')}
            </Link>
            <Link onClick={() => setOpenMenu && setOpenMenu(false)} exact to={uris.miningFund}>
              {t('header.miningFund')}
            </Link>
          </div>
        </li>
        <li className="tradingPlatform-dropdown">
          <Link
            onClick={() => setOpenMenu && setOpenMenu(false)}
            exact
            activeClassName="current-nav"
            to={uris.tradingPlatform}
          >
            {t('header.tradingPlatform')}
            <FontAwesomeIcon style={{ marginLeft: '4px' }} icon={['fas', 'caret-down']} />
          </Link>
          <div className="sub-menu tradingPlatform-sub-menu">
            <HashLink
              onClick={() => setOpenMenu && setOpenMenu(false)}
              to={`${uris.tradingPlatform}#${uriEncode('single-subscription')}`}
            >
              {t('tradingPlatform.body.subscription.title').toLocaleUpperCase()}
            </HashLink>
            <HashLink
              onClick={() => setOpenMenu && setOpenMenu(false)}
              to={`${uris.tradingPlatform}#${uriEncode('massive-data')}`}
            >
              {t('tradingPlatform.body.tradingData.title').toLocaleUpperCase()}
            </HashLink>
            <HashLink
              onClick={() => setOpenMenu && setOpenMenu(false)}
              to={`${uris.tradingPlatform}#${uriEncode('private-equity')}`}
            >
              {t('tradingPlatform.body.hedgeFund.title').toLocaleUpperCase()}
            </HashLink>
          </div>
        </li>
        <li>
          <Link
            onClick={() => setOpenMenu && setOpenMenu(false)}
            activeClassName="current-nav"
            to={uris.about}
          >
            {t('header.about')}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpenMenu && setOpenMenu(false)}
            activeClassName="current-nav"
            to={uris.contact}
          >
            {t('header.contact')}
          </Link>
        </li>
        {!success && (
          <li>
            <Link
              onClick={() => setOpenMenu && setOpenMenu(false)}
              activeClassName="current-nav"
              to={uris.clientLogin}
            >
              {t('header.clientLogin')}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

const LanguageLinks: React.FC = () => {
  const { i18n } = useTranslation()

  return (
    <div className="language-links">
      <ul className="link-list">
        {Object.keys(languages).map((lng) => (
          <li key={lng} className="login-button">
            <button
              className={`language-button ${i18n.resolvedLanguage === lng ? 'active' : 'inactive'}`}
              key={lng}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {languages[lng].nativeName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const LogoMain: React.FC<{ setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  setOpenMenu,
}) => {
  return (
    <Link onClick={() => setOpenMenu && setOpenMenu(false)} className="logo-link" to={uris.home}>
      <div className="logo-container">
        <img src={logo} alt="INVEST WORLD Logo" />
      </div>
    </Link>
  )
}

const HeaderMain: React.FC<{
  theme?: 'light' | 'dark' | 'dark-nav'
}> = ({ theme }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <Helmet titleTemplate="%s | Invest World">Invest World</Helmet>
      <header className={`header-main ${theme}`}>
        <section>
          <LogoMain />
          <NavLinks />
          <LanguageLinks />
        </section>
      </header>
      <header className={`header-main mobile ${theme}`}>
        <section>
          <div className="header-left">
            <Button className="menu-open-button" onClick={() => setOpenMenu(!openMenu)}>
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </Button>
            <LogoMain />
          </div>
          <LanguageLinks />
          <div className={openMenu ? 'nav-list-mobile open' : 'nav-list-mobile'}>
            <div className="nav-links-header">
              <LogoMain setOpenMenu={setOpenMenu} />
              <FontAwesomeIcon onClick={() => setOpenMenu(false)} icon={['fas', 'times']} />
            </div>
            <ul className="nav-links-container">
              <NavLinks setOpenMenu={setOpenMenu} mobile />
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setOpenMenu(false)}
            className={`nav-list-background ${!openMenu && 'close'}`}
          />
        </section>
      </header>
    </>
  )
}

export default React.memo(HeaderMain)
