import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import aboutTranslations from './Resource/About'
import authTranslations from './Resource/Auth'
import capitalManagementTranslations from './Resource/CapitalManagement'
import contactTranslations from './Resource/Contact'
import errorTranslations from './Resource/Error'
import homepageTranslations from './Resource/Homepage'
import layoutTranslations from './Resource/Layout'
import miningFundTranslations from './Resource/MiningFund'
import tradingFundTranslations from './Resource/TradingFund'
import tradingPlatformTranslations from './Resource/TradingPlatform'

const languageDetector = new LanguageDetector()

const browserLanguage = window.navigator.language
const defaultZHLanguage = 'zh-TW'
const fallbackLanguage = 'en-US'
const lookupKey = 'pm-lang'

const isBrowserZh = browserLanguage.split('-')[0] === 'zh'

languageDetector.addDetector({
  name: 'zhDetector',
  lookup(): string | string[] | undefined {
    if (isBrowserZh) {
      return defaultZHLanguage
    }
    return undefined
  },
})

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['cookie', 'zhDetector', 'navigator'],
      caches: ['cookie'],
      lookupCookie: lookupKey,
    },
    resources: {
      'en-US': {
        translation: {
          ...layoutTranslations['en-US'],
          ...tradingFundTranslations['en-US'],
          ...miningFundTranslations['en-US'],
          ...tradingPlatformTranslations['en-US'],
          ...homepageTranslations['en-US'],
          ...aboutTranslations['en-US'],
          ...contactTranslations['en-US'],
          ...authTranslations['en-US'],
          ...errorTranslations['en-US'],
          ...capitalManagementTranslations['en-US'],
        },
      },
    },
    lng: i18n.options.lng,
    debug: false,
    fallbackLng: fallbackLanguage,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(() => null)

export default i18n
