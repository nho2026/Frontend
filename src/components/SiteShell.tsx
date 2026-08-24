import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowRight, Menu, Phone, X } from 'lucide-react'
import logoImage from '../assets/Logo.png'
import { useI18n } from '../i18n'
import type { RoutePath } from '../types'
import { RouteLink } from './RouteLink'
import {
  bodyCopyClass,
  primaryButtonClass,
  shellClass,
} from './ui/ui'

type SiteShellProps = {
  children: ReactNode
  currentPath: RoutePath
  navigate: (path: RoutePath) => void
}

const languageOptions = [
  { code: 'ku', label: 'KU' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
] as const

export function SiteShell({
  children,
  currentPath,
  navigate,
}: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { content, language, setLanguage, isRTL } = useI18n()
  const { shell, site } = content

  useEffect(() => {
    setMenuOpen(false)
  }, [currentPath, language])

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-40 border-b border-white/40 bg-[linear-gradient(180deg,rgba(242,250,249,0.96),rgba(242,250,249,0.88))] backdrop-blur-xl">
        <div className={`${shellClass} py-4`}>
          <div className="grid gap-3">
            <div className="flex items-center justify-between gap-4 rounded-[26px] border border-[color:var(--brand-line)] bg-white/86 px-4 py-3 shadow-[0_14px_30px_rgba(18,38,63,0.08)] lg:hidden">
              <button
                type="button"
                className={`inline-flex min-w-0 items-center gap-3 bg-transparent p-0 ${isRTL ? 'text-right' : 'text-left'}`}
                onClick={() => navigate('/')}
                aria-label="Go to home page"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-[color:var(--brand-line)] bg-white shadow-[0_14px_24px_rgba(18,38,63,0.1)]">
                  <img
                    src={logoImage}
                    alt={shell.brand}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-sm font-semibold text-[color:var(--brand-ink)]">
                    {shell.brand}
                  </strong>
                  <span className="block truncate text-xs text-slate-500">
                    {shell.mobileTagline}
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--brand-line)] bg-white text-[color:var(--brand-ink)] shadow-[0_10px_22px_rgba(18,38,63,0.08)]"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <div className="hidden lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-5 rounded-[26px] border border-[color:var(--brand-line)] bg-white/84 px-4 py-3 shadow-[0_14px_30px_rgba(18,38,63,0.08)]">
              <button
                type="button"
                className={`inline-flex shrink-0 items-center gap-4 bg-transparent p-0 ${isRTL ? 'text-right' : 'text-left'}`}
                onClick={() => navigate('/')}
                aria-label="Go to home page"
              >
                <span className="flex h-15 w-15 items-center justify-center overflow-hidden rounded-[20px] border border-[color:var(--brand-line)] bg-white shadow-[0_18px_30px_rgba(18,38,63,0.12)]">
                  <img
                    src={logoImage}
                    alt={shell.brand}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="grid gap-1">
                  <strong className="text-lg font-semibold text-[color:var(--brand-ink)]">
                    {shell.brand}
                  </strong>
                  <span className="text-sm text-slate-500">
                    {shell.desktopTagline}
                  </span>
                </span>
              </button>

              <nav
                className="flex min-w-0 flex-wrap items-center justify-center gap-2"
                aria-label="Primary"
              >
                {site.siteNavigation.map((item) => {
                  const isActive = currentPath === item.path

                  return (
                    <RouteLink
                      key={item.path}
                      className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition duration-200 ${
                        isActive
                          ? 'bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] text-white shadow-[0_14px_24px_rgba(17,91,166,0.18)]'
                          : 'text-slate-600 hover:bg-[color:var(--brand-blue)]/8 hover:text-[color:var(--brand-ink)]'
                      }`}
                      currentPath={currentPath}
                      path={item.path}
                      navigate={navigate}
                    >
                      {item.label}
                    </RouteLink>
                  )
                })}
              </nav>

              <div className="flex shrink-0 items-center gap-3">
                <div className="hidden 2xl:inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--brand-line)] bg-white/78 px-3.5 text-sm text-slate-600 shadow-[0_10px_24px_rgba(18,38,63,0.06)]">
                  <Phone className="h-4 w-4 text-[color:var(--brand-blue)]" />
                  <span>{shell.phone}</span>
                </div>

                <div className="inline-flex items-center gap-1 rounded-full border border-[color:var(--brand-line)] bg-white/84 p-1 shadow-[0_10px_24px_rgba(18,38,63,0.06)]">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setLanguage(option.code)}
                      className={`inline-flex h-9 min-w-10 items-center justify-center rounded-full px-3 text-xs font-semibold transition duration-200 ${
                        language === option.code
                          ? 'bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] text-white'
                          : 'text-slate-600 hover:bg-[color:var(--brand-blue)]/8'
                      }`}
                      aria-label={`${shell.language}: ${option.label}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <RouteLink
                  className={primaryButtonClass}
                  currentPath={currentPath}
                  path="/contact"
                  navigate={navigate}
                >
                  {shell.bookAppointment}
                </RouteLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-slate-950/35 transition duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        />

        <aside
          className={`absolute top-0 h-full w-[min(360px,88vw)] border-l border-[color:var(--brand-line)] bg-[linear-gradient(180deg,#f2faf9_0%,#edf5f8_50%,#f8fbfc_100%)] px-5 py-5 shadow-[-24px_0_50px_rgba(16,38,58,0.18)] transition duration-300 ${
            isRTL ? 'left-0 border-l-0 border-r' : 'right-0'
          } ${menuOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'}`}
        >
          <div className="flex h-full flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-[color:var(--brand-line)] bg-white shadow-[0_14px_24px_rgba(18,38,63,0.1)]">
                  <img
                    src={logoImage}
                    alt={shell.brand}
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
                    {shell.brand}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {shell.mobileTagline}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-line)] bg-white text-[color:var(--brand-ink)] shadow-[0_10px_22px_rgba(18,38,63,0.08)]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-[24px] border border-[color:var(--brand-line)] bg-white/84 p-4 shadow-[0_14px_28px_rgba(18,38,63,0.08)]">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                {shell.specialtyScope}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {shell.specialtySummary}
              </p>
              <div className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--brand-line)] bg-[color:var(--brand-blue)]/6 px-3.5 text-sm text-slate-600">
                <Phone className="h-4 w-4 text-[color:var(--brand-blue)]" />
                <span>{shell.phone}</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-[color:var(--brand-line)] bg-white p-1">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    className={`inline-flex h-9 min-w-10 items-center justify-center rounded-full px-3 text-xs font-semibold transition duration-200 ${
                      language === option.code
                        ? 'bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] text-white'
                        : 'text-slate-600 hover:bg-[color:var(--brand-blue)]/8'
                    }`}
                    aria-label={`${shell.language}: ${option.label}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <nav className="grid gap-2" aria-label="Mobile primary">
              {site.siteNavigation.map((item) => {
                const isActive = currentPath === item.path

                return (
                  <RouteLink
                    key={item.path}
                    className={`grid gap-1 rounded-[22px] border px-4 py-3.5 transition duration-200 ${
                      isActive
                        ? 'border-transparent bg-[linear-gradient(135deg,var(--brand-blue),var(--brand-teal))] text-white shadow-[0_16px_28px_rgba(17,91,166,0.18)]'
                        : 'border-[color:var(--brand-line)] bg-white/84 text-[color:var(--brand-ink)] shadow-[0_10px_24px_rgba(18,38,63,0.06)]'
                    }`}
                    currentPath={currentPath}
                    path={item.path}
                    navigate={navigate}
                  >
                    <span className="font-semibold">{item.label}</span>
                    <small
                      className={`leading-[1.55] ${
                        isActive ? 'text-white/82' : 'text-slate-500'
                      }`}
                    >
                      {item.summary}
                    </small>
                  </RouteLink>
                )
              })}
            </nav>

            <div className="mt-auto grid gap-3">
              <RouteLink
                className={`${primaryButtonClass} w-full`}
                currentPath={currentPath}
                path="/contact"
                navigate={navigate}
              >
                {shell.bookAppointment}
              </RouteLink>
            </div>
          </div>
        </aside>
      </div>

      <main>{children}</main>

      <footer className="border-t border-white/30 bg-[linear-gradient(180deg,#0d2234_0%,#12344e_46%,#16705f_100%)] py-14 text-white md:py-16">
        <div className={`${shellClass} grid gap-10`}>
          <div className="grid gap-5">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_18px_36px_rgba(7,17,32,0.2)]">
                <img
                  src={logoImage}
                  alt={shell.brand}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="m-0 text-[0.84rem] font-bold uppercase tracking-[0.18em] text-cyan-100">
                  {shell.brand}
                </p>
                <p className="mt-1 text-sm text-cyan-50/80">
                  {shell.footerTagline}
                </p>
              </div>
            </div>
            <p className={`${bodyCopyClass} max-w-125 text-cyan-50/82`}>
              {shell.footerBody}
            </p>
            <RouteLink
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition duration-200 hover:text-cyan-100"
              currentPath={currentPath}
              path="/contact"
              navigate={navigate}
            >
              {shell.footerCta}
              <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </RouteLink>
          </div>
        </div>
      </footer>
    </div>
  )
}
