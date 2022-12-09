import React from 'react'

import './Main.scss'

const BannerMain = (props) => {
  const { children } = props

  return <section className="banner-main">{children}</section>
}

export default React.memo(BannerMain)
