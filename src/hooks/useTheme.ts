import { useCallback, useEffect, useState } from 'react'
import { THEME_STORAGE_KEY } from '../app/config.ts'

export type Theme = 'light' | 'dark'

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

function getInitialTheme(): Theme {
  const applied = document.documentElement.dataset.theme

  if (isTheme(applied)) {
    return applied
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

/** Хранит текущую тему, применяет её к документу и сохраняет выбор пользователя. */
export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // localStorage может быть недоступен (например, в приватном режиме): тема просто не сохранится.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
