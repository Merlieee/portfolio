import { lazy, Suspense } from 'react'
import './i18n/index.js'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Socials from './components/Socials'

// Dev-only visual feedback toolbar. The DEV guard lets Vite drop the dynamic
// import (and its chunk) entirely from production builds.
const Agentation = import.meta.env.DEV
  ? lazy(() => import('agentation').then((m) => ({ default: m.Agentation })))
  : null

export default function App() {
  return (
    <>
      <Nav />
      <main className="wrap pt-16 pb-16 sm:pt-24 sm:pb-24 mb-[120px]">
        <Intro />
        <Projects />
        <About />
        <Contact />
        <Socials />
      </main>
      {Agentation && (
        <Suspense fallback={null}>
          <Agentation endpoint="http://localhost:4747" />
        </Suspense>
      )}
    </>
  )
}
