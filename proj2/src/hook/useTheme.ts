import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

// localStorage can throw (privacy modes, sandboxed iframes), so fall back gracefully.
function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Theme still applies for this session; it just won't persist.
  }
}

function getInitialTheme(): Theme {
  return (
    readStoredTheme() ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  )
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Persist only explicit choices, so users who never toggle keep following the OS.
  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    storeTheme(next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}
