import { useTranslation } from 'react-i18next'
import { useFadeIn } from '../hooks/useFadeIn'

const PROJECTS = [
  {
    key: 'elkardia',
    href: 'https://elkardia.vercel.app/?lang=en',
    logo: '/images/elkardia-logo.svg',
  },
  {
    key: 'rftime',
    href: 'https://rftime.vercel.app/?lang=en',
    logo: '/images/rftime-logo.svg',
  },
]

function Card({ p }) {
  const { t } = useTranslation()
  const ref = useFadeIn()

  return (
    <a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="card reveal group"
    >
      <div className="flex h-36 items-center justify-center">
        <img
          src={p.logo}
          alt={t(`work.${p.key}.name`)}
          className="max-h-12 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
        />
      </div>
      <div className="px-4 pb-4 pt-1">
        <div className="font-medium text-[var(--ink)]">
          {t(`work.${p.key}.name`)}
        </div>
        <div className="text-[var(--gray)]">{t(`work.${p.key}.desc`)}</div>
      </div>
    </a>
  )
}

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section className="mt-24">
      <h2 className="label mb-5">{t('work.label')}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.key} p={p} />
        ))}
      </div>
    </section>
  )
}
