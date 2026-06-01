import { useTranslation } from 'react-i18next'

const EMAIL = 'mmwojcik.477@gmail.com'

export default function Nav() {
  const { t, i18n } = useTranslation()

  function toggleLang() {
    const next = i18n.language === 'pl' ? 'en' : 'pl'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  return (
    <div className="wrap flex justify-end pt-6">
      <button
        onClick={toggleLang}
        className="text-[14px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
        aria-label="Switch language"
      >
        {t('nav.langSwitch')}
      </button>
    </div>
  )
}

export { EMAIL }
