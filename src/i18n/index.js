import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pl from './pl.js'
import en from './en.js'

const savedLang = localStorage.getItem('lang') || 'pl'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
    },
    lng: savedLang,
    fallbackLng: 'pl',
    interpolation: { escapeValue: false },
  })

export default i18n
