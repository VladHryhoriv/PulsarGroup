import { hot } from 'react-hot-loader/root'
import { FC, useMemo } from 'react'
import { ToastContainer } from 'react-toastify'
import loadable from '@loadable/component'
import { renderRoutes } from 'react-router-config'
import 'react-toastify/dist/ReactToastify.css'

import { useSession } from 'features/common/hooks/useSession'
import { CenterTemplate } from 'shared/ui/templates/center-template'
import { Spin } from 'shared/ui/atoms/spin'
import { protectedRoutes } from 'shared/lib/guards-route/config'
import { LocaleProvider } from 'entities/i18n/components/locale-provider'

import { routes } from '../pages/routes'
import { ErrorBoundary } from 'features/common/components/error-boundary'
import {
  useAuthenticated,
  useIsAdmin,
  usePendingAuth,
} from 'entities/auth/model/selectors'
import { ThemeProviderHOC } from 'entities/theme/components/theme-provider'

const GlobalStyle = loadable(
  () => import(/* webpackChunkName: "style-js" */ './global-styles'),
  { resolveComponent: ({ GlobalStyle }) => GlobalStyle }
)

export const Application: FC = () => {
  useSession()
  const isLoading = usePendingAuth()
  const isAuthenticated = useAuthenticated()
  const isAdmin = useIsAdmin()

  const withGuardsRoutes = useMemo(() => {
    return protectedRoutes(routes, { isAuthenticated, isAdmin })
  }, [isAuthenticated, isAdmin])

  if (isLoading) {
    return (
      <CenterTemplate>
        <Spin size="large" />
      </CenterTemplate>
    )
  }
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <ThemeProviderHOC>
        <LocaleProvider>
          {renderRoutes(withGuardsRoutes)}
          <ToastContainer />
        </LocaleProvider>
      </ThemeProviderHOC>
    </ErrorBoundary>
  )
}

export default hot(Application)
