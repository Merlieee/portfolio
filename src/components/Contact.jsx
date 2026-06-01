import { useTranslation } from 'react-i18next'
import { useFadeIn } from '../hooks/useFadeIn'
import { EMAIL } from './Nav'

export default function Contact() {
  const { t } = useTranslation()
  const ref = useFadeIn()

  return (
    <section id="contact" ref={ref} className="reveal mt-24">
      <h2 className="label mb-5">{t('contact.label')}</h2>
      <div className="flex items-center gap-6">
        <p className="flex-1 text-[var(--gray)] leading-[1.62]">{t('contact.text')}</p>
        <a href={`mailto:${EMAIL}`} rel="nofollow" className="pill shrink-0">
          {t('contact.cta')}
        </a>
      </div>
    </section>
  )
}
