import React from 'react'

import FooterMain from './Footer/Main'
import HeaderMain from './Header/Main'
import './Index.scss'

const LayoutMainIndex: React.FC<{ theme: 'dark' | 'light' | 'dark-nav' }> = ({
  children,
  theme,
}) => {
  return (
    <main className="layout-main">
      <HeaderMain theme={theme} />
      <section className={`main-body ${theme}`}>{children}</section>
      <FooterMain theme={theme} />
    </main>
  )
}

export default LayoutMainIndex
