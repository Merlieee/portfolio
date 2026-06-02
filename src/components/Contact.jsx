import { useTranslation } from 'react-i18next'
import { useFadeIn } from '../hooks/useFadeIn'
import { EMAIL } from './Footer'

export default function Contact() {
  const { t } = useTranslation()
  const ref = useFadeIn(360)

  return (
    <section id="contact" ref={ref} className="reveal mt-24">
      <h2 className="label mb-5">{t('contact.label')}</h2>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-20">
        <p className="flex-1 text-[var(--gray)] leading-[1.62] whitespace-normal md:whitespace-pre-line">{t('contact.text')}</p>
        <a href={`mailto:${EMAIL}`} rel="nofollow" className="pill shrink-0">
          {t('contact.cta')}
        </a>
      </div>
    </section>
  )
}
