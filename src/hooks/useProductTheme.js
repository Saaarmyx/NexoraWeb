import { useEffect } from 'react'

function useProductTheme(theme = 'light') {
  useEffect(() => {
    document.body.dataset.theme = theme

    return () => {
      document.body.dataset.theme = 'light'
    }
  }, [theme])
}

export default useProductTheme
