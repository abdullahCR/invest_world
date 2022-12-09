// pls sort alphabetically by uri!
const uris = {
  about: '/about',
  clientLogin: '/client-login',
  contact: '/contact',
  home: '/',
  capitalManagement: '/capital-management',
  miningFund: '/mining-fund',
  tradingFund: '/trading-fund',
  clientPasswordForgot: '/clientPassword/forgot',
  clientPasswordReset: '/reset/password/:identificationToken',
  tradingPlatform: '/trading-platform',
  external: {
    tradeapi: {
      forgotPassword: `http://${process.env.REACT_APP_PORTAL_PROOFMINING_GUEST}/#/forgot-password`,
    },
  },
}

export default uris
