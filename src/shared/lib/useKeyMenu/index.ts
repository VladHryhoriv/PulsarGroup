import { useCallback, useEffect, useState } from 'react'
import qs from 'query-string'

import { useLocation } from 'react-router-dom'

export const useKeyMenu = (defaultKey = '', depth = 0): string => {
  const [selectedKey, setKey] = useState(defaultKey)
  const location = useLocation()

  const getKey = useCallback(
    (pathname: string) => {
      const query = qs.parse(pathname)
      const pathsUrl = Object.keys(query)[0]

      const result = pathsUrl.split('/').filter(Boolean)[depth] || defaultKey

      setKey(result)
    },
    [defaultKey, depth]
  )

  useEffect(() => {
    getKey(location.pathname)
  }, [getKey, location])

  return selectedKey
}
