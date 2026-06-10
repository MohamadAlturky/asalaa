import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { AppLocale } from '../types/homeContent'

export type Theme = 'light' | 'dark'

type AppPreferencesContextValue = {
  locale: AppLocale
  setLocale: (locale: AppLocale) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null)

function getStoredLocale(): AppLocale {
  try {
    const stored = localStorage.getItem('asala-locale')
    if (stored === 'ar' || stored === 'en') return stored
  } catch {
    // ignore
  }
  return 'ar'
}

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem('asala-theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // ignore
  }
  return 'light'
}

export function AppPreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>(getStoredLocale)
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)

  const setLocale = (next: AppLocale) => {
    setLocaleState(next)
    try { localStorage.setItem('asala-locale', next) } catch { /* ignore */ }
  }

  const setTheme = (next: Theme) => {
    setThemeState(next)
    try { localStorage.setItem('asala-theme', next) } catch { /* ignore */ }
  }

  useEffect(() => {
    const root = document.documentElement
    root.lang = locale === 'ar' ? 'ar' : 'en'
    root.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.title = locale === 'en'
      ? 'Asala - syrians culture'
      : 'تاريخ حضارة سوريا - أصالة'
  }, [locale])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <AppPreferencesContext.Provider value={{ locale, setLocale, theme, setTheme }}>
      {children}
    </AppPreferencesContext.Provider>
  )
}

export function useAppPreferences(): AppPreferencesContextValue {
  const ctx = useContext(AppPreferencesContext)
  if (!ctx) throw new Error('useAppPreferences must be used within AppPreferencesProvider')
  return ctx
}
