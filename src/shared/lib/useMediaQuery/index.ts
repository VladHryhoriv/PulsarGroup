import { useEffect, useState } from 'react'

export const useMediaQuery = (mediaQuery: string): boolean => {
  const [isVerified, setIsVerified] = useState(
    !!window.matchMedia(mediaQuery).matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches)

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler)
    } catch (e) {
      //Safari isn't supporting mediaQueryList.addEventListener
      console.error(e)
      mediaQueryList.addListener(documentChangeHandler)
    }

    documentChangeHandler()
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler)
      } catch (e) {
        //Safari isn't supporting mediaQueryList.removeEventListener
        console.error(e)
        mediaQueryList.removeListener(documentChangeHandler)
      }
    }
  }, [mediaQuery])

  return isVerified
}

export default useMediaQuery
