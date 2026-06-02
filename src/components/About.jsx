import { useTranslation } from 'react-i18next'
import { useFadeIn } from '../hooks/useFadeIn'
import { withBreaks } from '../utils/withBreaks'

export default function About() {
  const { t } = useTranslation()
  const ref = useFadeIn(240)
  const items = t('focus.items', { returnObjects: true })

  return (
    <section id="about" ref={ref} className="reveal mt-24">
      <h2 className="label mb-5">{t('about.label')}</h2>
      <p className="text-[var(--gray)] leading-[1.62]">{withBreaks(t('about.text'))}</p>

      <div className="mt-6">
        {Array.isArray(items) &&
          items.map((f, i) => (
            <div key={i} className="row">
              <div>
                <div className="text-[var(--ink)]">{f.name}</div>
                <div className="text-[var(--muted)]">{f.sub}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
