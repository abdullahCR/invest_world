import getFullYear from '../../../../Helper/Date/DateFormatter'

const layoutTranslations = {
  'en-US': {
    header: {
      home: 'HOME',
      wealthManagement: 'CAPITAL MANAGEMENT',
      tradingFund: 'INVEST WORLD TRADING FUND, LP',
      miningFund: 'INVEST WORLD MINING FUND, LP',
      tradingPlatform: 'TRADING PLATFORM',
      about: 'ABOUT',
      contact: 'CONTACT',
      clientLogin: 'CLIENT LOGIN',
    },
    footer: {
      copyright: `Copyrights © INVEST WORLD, LLC  2005-${getFullYear}`,
      policy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },
}

export default layoutTranslations
