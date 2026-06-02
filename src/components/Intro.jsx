import { useTranslation } from 'react-i18next'
import { useFadeIn } from '../hooks/useFadeIn'
import { withBreaks } from '../utils/withBreaks'
import { EMAIL } from './Footer'

export default function Intro() {
  const { t } = useTranslation()
  const ref = useFadeIn()

  return (
    <section id="top" ref={ref} className="reveal">
      {/* avatar + name + role */}
      <div className="flex items-center gap-3">
        <img
          src="/images/avatar.jpg"
          alt={t('intro.name')}
          className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-black/5"
        />
        <div className="leading-tight">
          <div className="font-medium text-[var(--ink)]">{t('intro.name')}</div>
          <div className="text-[var(--gray)]">{t('intro.role')}</div>
        </div>
      </div>

      {/* bio */}
      <div className="mt-7 flex flex-col gap-4 text-[var(--gray)] leading-[1.62]">
        <p>{withBreaks(t('intro.bio1pre'))}</p>
        <p>
          {withBreaks(t('intro.bio2pre'))}
          <a
            href={`mailto:${EMAIL}`}
            rel="nofollow"
            className="ulink text-[var(--gray)] transition-colors hover:text-black"
          >
            {t('intro.bio2email')}
          </a>
          {t('intro.bio2end')}
        </p>
      </div>
    </section>
  )
}
