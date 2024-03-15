import { useEffect } from 'react'
import { getAuthProfile } from 'entities/auth/model/model'

export const useSession = (): void => {
  useEffect(() => {
    getAuthProfile()
  }, [])
}
