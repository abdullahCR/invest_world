import './Main.scss'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const FooterMain: React.FC<{
  theme?: 'light' | 'dark' | 'dark-nav'
}> = ({ theme }) => {
  const { t } = useTranslation()
  return (
    <>
      <footer className={`footer-main ${theme}`}>
        <section>
          <p>{t('footer.copyright')}</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </div>
          <div className="legal-links">
            <Link to="#">{t('footer.policy')}</Link>
            <Link to="#">{t('footer.terms')}</Link>
          </div>
        </section>
      </footer>
    </>
  )
}

export default FooterMain
