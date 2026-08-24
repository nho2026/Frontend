import type { MouseEvent, ReactNode } from 'react'
import type { RoutePath } from '../types'

type RouteLinkProps = {
  children: ReactNode
  className?: string
  currentPath: RoutePath
  path: RoutePath
  navigate: (path: RoutePath) => void
}

export function RouteLink({
  children,
  className,
  currentPath,
  path,
  navigate,
}: RouteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigate(path)
  }

  return (
    <a
      href={path}
      className={className}
      onClick={handleClick}
      aria-current={currentPath === path ? 'page' : undefined}
    >
      {children}
    </a>
  )
}
