import { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthenticated, useIsAdmin } from 'entities/auth/model/selectors'
import { paths } from 'pages/paths'

export const Frok: FC = () => {
  const isAuthenticated = useAuthenticated()
  const isAdmin = useIsAdmin()

  if (isAuthenticated && isAdmin) {
    return <Redirect to={paths.dashboard()} />
  }

  return <Redirect to={paths.home()} />
}
