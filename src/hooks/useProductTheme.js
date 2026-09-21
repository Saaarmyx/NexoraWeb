import { useEffect } from 'react'

function useProductTheme(theme = 'light', accent = null) {
  useEffect(() => {
    document.body.dataset.theme = theme

    if (accent) {
      document.body.style.setProperty('--color-theme-accent', `var(--${accent})`)
    }

    return () => {
      document.body.dataset.theme = 'light'
      document.body.style.removeProperty('--color-theme-accent')
    }
  }, [theme, accent])
}

export default useProductTheme
