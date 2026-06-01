import { useTranslation } from 'react-i18next'
import Socials from './Socials'

const EMAIL = 'mmwojcik.477@gmail.com'

export default function Footer() {
  const { t, i18n } = useTranslation()

  function toggleLang() {
    const next = i18n.language === 'pl' ? 'en' : 'pl'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  return (
    <footer className="wrap flex items-center justify-between pb-28">
      <Socials />
      <button
        onClick={toggleLang}
        className="text-[14px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
        aria-label="Switch language"
      >
        {t('nav.langSwitch')}
      </button>
    </footer>
  )
}

export { EMAIL }
