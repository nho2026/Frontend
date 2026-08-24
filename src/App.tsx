import { useEffect, useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import { SiteShell } from './components/SiteShell'
import { I18nProvider, useI18n } from './i18n'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { StaffPage } from './pages/StaffPage'
import type { RoutePath } from './types'

type RouteConfig = {
  path: RoutePath
  title: string
  page: ReactElement
}

function normalizePath(pathname: string, paths: Set<RoutePath>): RoutePath {
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  if (paths.has(pathname as RoutePath)) {
    return pathname as RoutePath
  }

  return '/'
}

function AppContent() {
  const { content } = useI18n()

  const routes: RouteConfig[] = useMemo(
    () => [
      {
        path: '/',
        title: content.titles['/'],
        page: <HomePage />,
      },
      {
        path: '/about',
        title: content.titles['/about'],
        page: <AboutPage />,
      },
      {
        path: '/staff',
        title: content.titles['/staff'],
        page: <StaffPage />,
      },
      {
        path: '/contact',
        title: content.titles['/contact'],
        page: <ContactPage />,
      },
    ],
    [content.titles],
  )

  const knownPaths = useMemo(
    () => new Set<RoutePath>(routes.map((route) => route.path)),
    [routes],
  )

  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname, knownPaths),
  )

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname, knownPaths))
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [knownPaths])

  useEffect(() => {
    setCurrentPath((previous) =>
      normalizePath(window.location.pathname, knownPaths) || previous,
    )
  }, [knownPaths])

  const activeRoute = useMemo(
    () => routes.find((route) => route.path === currentPath) ?? routes[0],
    [currentPath, routes],
  )

  useEffect(() => {
    document.title = activeRoute.title
  }, [activeRoute.title])

  const navigate = (path: RoutePath) => {
    if (path === currentPath) {
      return
    }

    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <SiteShell currentPath={currentPath} navigate={navigate}>
      {activeRoute.page}
    </SiteShell>
  )
}

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  )
}

export default App
